"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.sourceNodes = sourceNodes;

var _cloneDeep2 = _interopRequireDefault(require("lodash/cloneDeep"));

var _isOnline = _interopRequireDefault(require("is-online"));

var _downloadContentfulAssets = require("./download-contentful-assets");

var _fetch = require("./fetch");

var _normalize = require("./normalize");

var _pluginOptions = require("./plugin-options");

var _report = require("./report");

// @ts-check
const conflictFieldPrefix = `contentful`; // restrictedNodeFields from here https://www.gatsbyjs.com/docs/node-interface/

const restrictedNodeFields = [`children`, `contentful_id`, `fields`, `id`, `internal`, `parent`];
const CONTENT_DIGEST_COUNTER_SEPARATOR = `_COUNT_`;
/***
 * Localization algorithm
 *
 * 1. Make list of all resolvable IDs worrying just about the default ids not
 * localized ids
 * 2. Make mapping between ids, again not worrying about localization.
 * 3. When creating entries and assets, make the most localized version
 * possible for each localized node i.e. get the localized field if it exists
 * or the fallback field or the default field.
 */

async function sourceNodes({
  actions,
  getNode,
  getNodes,
  createNodeId,
  store,
  cache,
  getCache,
  reporter,
  parentSpan
}, pluginOptions) {
  var _store$getState$statu, _store$getState$statu2;

  const {
    createNode,
    touchNode,
    deleteNode,
    unstable_createNodeManifest
  } = actions;
  const online = await (0, _isOnline.default)();
  getNodes().forEach(node => {
    var _node$fields;

    if (node.internal.owner !== `gatsby-source-contentful`) {
      return;
    }

    touchNode(node);

    if (node !== null && node !== void 0 && (_node$fields = node.fields) !== null && _node$fields !== void 0 && _node$fields.localFile) {
      // Prevent GraphQL type inference from crashing on this property
      touchNode(getNode(node.fields.localFile));
    }
  });

  if (!online && process.env.GATSBY_CONTENTFUL_OFFLINE === `true` && process.env.NODE_ENV !== `production`) {
    return;
  }

  const pluginConfig = (0, _pluginOptions.createPluginConfig)(pluginOptions);
  const sourceId = `${pluginConfig.get(`spaceId`)}-${pluginConfig.get(`environment`)}`;
  const fetchActivity = reporter.activityTimer(`Contentful: Fetch data`, {
    parentSpan
  }); // If the user knows they are offline, serve them cached result
  // For prod builds though always fail if we can't get the latest data

  if (!online && process.env.GATSBY_CONTENTFUL_OFFLINE === `true` && process.env.NODE_ENV !== `production`) {
    reporter.info(`Using Contentful Offline cache ⚠️`);
    reporter.info(`Cache may be invalidated if you edit package.json, gatsby-node.js or gatsby-config.js files`);
    return;
  }

  if (process.env.GATSBY_CONTENTFUL_OFFLINE) {
    reporter.info(`Note: \`GATSBY_CONTENTFUL_OFFLINE\` was set but it either was not \`true\`, we _are_ online, or we are in production mode, so the flag is ignored.`);
  }

  fetchActivity.start();
  const CACHE_SYNC_TOKEN = `contentful-sync-token-${sourceId}`;
  const CACHE_CONTENT_TYPES = `contentful-content-types-${sourceId}`;
  /*
   * Subsequent calls of Contentfuls sync API return only changed data.
   *
   * In some cases, especially when using rich-text fields, there can be data
   * missing from referenced entries. This breaks the reference matching.
   *
   * To workround this, we cache the initial sync data and merge it
   * with all data from subsequent syncs. Afterwards the references get
   * resolved via the Contentful JS SDK.
   */

  const syncToken = (_store$getState$statu = store.getState().status.plugins) === null || _store$getState$statu === void 0 ? void 0 : (_store$getState$statu2 = _store$getState$statu[`gatsby-source-contentful`]) === null || _store$getState$statu2 === void 0 ? void 0 : _store$getState$statu2[CACHE_SYNC_TOKEN]; // Actual fetch of data from Contentful

  const {
    currentSyncData,
    tagItems,
    defaultLocale,
    locales: allLocales,
    space
  } = await (0, _fetch.fetchContent)({
    syncToken,
    pluginConfig,
    reporter
  });
  const contentTypeItems = await cache.get(CACHE_CONTENT_TYPES);
  const locales = allLocales.filter(pluginConfig.get(`localeFilter`));
  reporter.verbose(`Default locale: ${defaultLocale}. All locales: ${allLocales.map(({
    code
  }) => code).join(`, `)}`);

  if (allLocales.length !== locales.length) {
    reporter.verbose(`After plugin.options.localeFilter: ${locales.map(({
      code
    }) => code).join(`, `)}`);
  }

  if (locales.length === 0) {
    reporter.panic({
      id: _report.CODES.LocalesMissing,
      context: {
        sourceMessage: `Please check if your localeFilter is configured properly. Locales '${allLocales.map(item => item.code).join(`,`)}' were found but were filtered down to none.`
      }
    });
  } // Update syncToken


  const nextSyncToken = currentSyncData.nextSyncToken;
  actions.setPluginStatus({
    [CACHE_SYNC_TOKEN]: nextSyncToken
  });
  fetchActivity.end(); // Process data fetch results and turn them into GraphQL entities

  const processingActivity = reporter.activityTimer(`Contentful: Process data`, {
    parentSpan
  });
  processingActivity.start(); // Array of all existing Contentful nodes

  const existingNodes = getNodes().filter(n => n.internal.owner === `gatsby-source-contentful` && (pluginConfig.get(`enableTags`) ? n.internal.type !== `ContentfulTag` : true)); // Report existing, new and updated nodes

  const nodeCounts = {
    newEntry: 0,
    newAsset: 0,
    updatedEntry: 0,
    updatedAsset: 0,
    existingEntry: 0,
    existingAsset: 0,
    deletedEntry: currentSyncData.deletedEntries.length,
    deletedAsset: currentSyncData.deletedAssets.length
  };
  existingNodes.forEach(node => nodeCounts[`existing${node.sys.type}`]++);
  currentSyncData.entries.forEach(entry => entry.sys.revision === 1 ? nodeCounts.newEntry++ : nodeCounts.updatedEntry++);
  currentSyncData.assets.forEach(asset => asset.sys.revision === 1 ? nodeCounts.newAsset++ : nodeCounts.updatedAsset++);
  reporter.info(`Contentful: ${nodeCounts.newEntry} new entries`);
  reporter.info(`Contentful: ${nodeCounts.updatedEntry} updated entries`);
  reporter.info(`Contentful: ${nodeCounts.deletedEntry} deleted entries`);
  reporter.info(`Contentful: ${nodeCounts.existingEntry / locales.length} cached entries`);
  reporter.info(`Contentful: ${nodeCounts.newAsset} new assets`);
  reporter.info(`Contentful: ${nodeCounts.updatedAsset} updated assets`);
  reporter.info(`Contentful: ${nodeCounts.existingAsset / locales.length} cached assets`);
  reporter.info(`Contentful: ${nodeCounts.deletedAsset} deleted assets`);
  reporter.verbose(`Building Contentful reference map`);
  const entryList = (0, _normalize.buildEntryList)({
    contentTypeItems,
    currentSyncData
  });
  const {
    assets
  } = currentSyncData; // Create map of resolvable ids so we can check links against them while creating
  // links.

  const resolvable = (0, _normalize.buildResolvableSet)({
    existingNodes,
    entryList,
    assets
  }); // Build foreign reference map before starting to insert any nodes

  const foreignReferenceMap = (0, _normalize.buildForeignReferenceMap)({
    contentTypeItems,
    entryList,
    resolvable,
    defaultLocale,
    space,
    useNameForId: pluginConfig.get(`useNameForId`)
  });
  reporter.verbose(`Resolving Contentful references`);
  const newOrUpdatedEntries = new Set();
  entryList.forEach(entries => {
    entries.forEach(entry => {
      newOrUpdatedEntries.add(`${entry.sys.id}___${entry.sys.type}`);
    });
  });
  const {
    deletedEntries,
    deletedAssets
  } = currentSyncData;
  const deletedEntryGatsbyReferenceIds = new Set();

  function deleteContentfulNode(node) {
    const normalizedType = node.sys.type.startsWith(`Deleted`) ? node.sys.type.substring(`Deleted`.length) : node.sys.type;
    const localizedNodes = locales.map(locale => {
      const nodeId = createNodeId((0, _normalize.makeId)({
        spaceId: space.sys.id,
        id: node.sys.id,
        type: normalizedType,
        currentLocale: locale.code,
        defaultLocale
      })); // Gather deleted node ids to remove them later on

      deletedEntryGatsbyReferenceIds.add(nodeId);
      return getNode(nodeId);
    }).filter(node => node);
    localizedNodes.forEach(node => {
      // touchNode first, to populate typeOwners & avoid erroring
      touchNode(node);
      deleteNode(node);
    });
  }

  if (deletedEntries.length || deletedAssets.length) {
    const deletionActivity = reporter.activityTimer(`Contentful: Deleting nodes and assets`, {
      parentSpan
    });
    deletionActivity.start();
    deletedEntries.forEach(deleteContentfulNode);
    deletedAssets.forEach(deleteContentfulNode);
    deletionActivity.end();
  } // Update existing entry nodes that weren't updated but that need reverse links added or removed.


  const existingNodesThatNeedReverseLinksUpdateInDatastore = new Set();
  existingNodes.filter(n => n.sys.type === `Entry` && !newOrUpdatedEntries.has(`${n.id}___${n.sys.type}`) && !deletedEntryGatsbyReferenceIds.has(n.id)).forEach(n => {
    if (n.contentful_id && foreignReferenceMap[`${n.contentful_id}___${n.sys.type}`]) {
      foreignReferenceMap[`${n.contentful_id}___${n.sys.type}`].forEach(foreignReference => {
        const {
          name,
          id: contentfulId,
          type,
          spaceId
        } = foreignReference;
        const nodeId = createNodeId((0, _normalize.makeId)({
          spaceId,
          id: contentfulId,
          type,
          currentLocale: n.node_locale,
          defaultLocale
        })); // Create new reference field when none exists

        if (!n[name]) {
          existingNodesThatNeedReverseLinksUpdateInDatastore.add(n);
          n[name] = [nodeId];
          return;
        } // Add non existing references to reference field


        if (n[name] && !n[name].includes(nodeId)) {
          existingNodesThatNeedReverseLinksUpdateInDatastore.add(n);
          n[name].push(nodeId);
        }
      });
    } // Remove references to deleted nodes


    if (n.contentful_id && deletedEntryGatsbyReferenceIds.size) {
      Object.keys(n).forEach(name => {
        // @todo Detect reference fields based on schema. Should be easier to achieve in the upcoming version.
        if (!name.endsWith(`___NODE`)) {
          return;
        }

        if (Array.isArray(n[name])) {
          n[name] = n[name].filter(referenceId => {
            const shouldRemove = deletedEntryGatsbyReferenceIds.has(referenceId);

            if (shouldRemove) {
              existingNodesThatNeedReverseLinksUpdateInDatastore.add(n);
            }

            return !shouldRemove;
          });
        } else {
          const referenceId = n[name];

          if (deletedEntryGatsbyReferenceIds.has(referenceId)) {
            existingNodesThatNeedReverseLinksUpdateInDatastore.add(n);
            n[name] = null;
          }
        }
      });
    }
  }); // We need to call `createNode` on nodes we modified reverse links on,
  // otherwise changes won't actually persist

  if (existingNodesThatNeedReverseLinksUpdateInDatastore.size) {
    for (const node of existingNodesThatNeedReverseLinksUpdateInDatastore) {
      function addChildrenToList(node, nodeList = [node]) {
        for (const childNodeId of (_node$children = node === null || node === void 0 ? void 0 : node.children) !== null && _node$children !== void 0 ? _node$children : []) {
          var _node$children;

          const childNode = getNode(childNodeId);

          if (childNode && childNode.internal.owner === `gatsby-source-contentful`) {
            nodeList.push(childNode);
            addChildrenToList(childNode);
          }
        }

        return nodeList;
      }

      const nodeAndDescendants = addChildrenToList(node);

      for (const nodeToUpdateOriginal of nodeAndDescendants) {
        // We should not mutate original node as Gatsby will still
        // compare against what's in in-memory weak cache, so we
        // clone original node to ensure reference identity is not possible
        const nodeToUpdate = (0, _cloneDeep2.default)(nodeToUpdateOriginal); // We need to remove properties from existing fields
        // that are reserved and managed by Gatsby (`.internal.owner`, `.fields`).
        // Gatsby automatically will set `.owner` it back

        delete nodeToUpdate.internal.owner; // `.fields` need to be created with `createNodeField` action, we can't just re-add them.
        // Other plugins (or site itself) will have opportunity to re-generate them in `onCreateNode` lifecycle.
        // Contentful content nodes are not using `createNodeField` so it's safe to delete them.
        // (Asset nodes DO use `createNodeField` for `localFile` and if we were updating those, then
        // we would also need to restore that field ourselves after re-creating a node)

        delete nodeToUpdate.fields; // plugin adds node field on asset nodes which don't have reverse links
        // We add or modify counter postfix to contentDigest
        // to make sure Gatsby treat this as data update

        let counter;
        const [initialContentDigest, counterStr] = nodeToUpdate.internal.contentDigest.split(CONTENT_DIGEST_COUNTER_SEPARATOR);

        if (counterStr) {
          counter = parseInt(counterStr, 10);
        }

        if (!counter || isNaN(counter)) {
          counter = 1;
        } else {
          counter++;
        }

        nodeToUpdate.internal.contentDigest = `${initialContentDigest}${CONTENT_DIGEST_COUNTER_SEPARATOR}${counter}`;
        createNode(nodeToUpdate);
      }
    }
  }

  const creationActivity = reporter.activityTimer(`Contentful: Create nodes`, {
    parentSpan
  });
  creationActivity.start();

  for (let i = 0; i < contentTypeItems.length; i++) {
    const contentTypeItem = contentTypeItems[i];

    if (entryList[i].length) {
      reporter.info(`Creating ${entryList[i].length} Contentful ${pluginConfig.get(`useNameForId`) ? contentTypeItem.name : contentTypeItem.sys.id} nodes`);
    } // A contentType can hold lots of entries which create nodes
    // We wait until all nodes are created and processed until we handle the next one
    // TODO add batching in gatsby-core


    await Promise.all((0, _normalize.createNodesForContentType)({
      contentTypeItem,
      restrictedNodeFields,
      conflictFieldPrefix,
      entries: entryList[i],
      createNode,
      createNodeId,
      getNode,
      resolvable,
      foreignReferenceMap,
      defaultLocale,
      locales,
      space,
      useNameForId: pluginConfig.get(`useNameForId`),
      pluginConfig,
      unstable_createNodeManifest
    }));
  }

  if (assets.length) {
    reporter.info(`Creating ${assets.length} Contentful asset nodes`);
  }

  const assetNodes = [];

  for (let i = 0; i < assets.length; i++) {
    // We wait for each asset to be process until handling the next one.
    assetNodes.push(...(await Promise.all((0, _normalize.createAssetNodes)({
      assetItem: assets[i],
      createNode,
      createNodeId,
      defaultLocale,
      locales,
      space,
      pluginConfig
    }))));
  } // Create tags entities


  if (tagItems.length) {
    reporter.info(`Creating ${tagItems.length} Contentful Tag nodes`);

    for (const tag of tagItems) {
      await createNode({
        id: createNodeId(`ContentfulTag__${space.sys.id}__${tag.sys.id}`),
        name: tag.name,
        contentful_id: tag.sys.id,
        internal: {
          type: `ContentfulTag`,
          contentDigest: tag.sys.updatedAt
        }
      });
    }
  }

  creationActivity.end(); // Download asset files to local fs

  if (pluginConfig.get(`downloadLocal`)) {
    await (0, _downloadContentfulAssets.downloadContentfulAssets)({
      assetNodes,
      actions,
      createNodeId,
      store,
      cache,
      getCache,
      getNode,
      reporter,
      assetDownloadWorkers: pluginConfig.get(`assetDownloadWorkers`)
    });
  }
}