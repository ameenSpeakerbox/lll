"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.makeId = exports.getLocalizedField = exports.createNodesForContentType = exports.createAssetNodes = exports.buildResolvableSet = exports.buildForeignReferenceMap = exports.buildFallbackChain = exports.buildEntryList = void 0;

var _isArray2 = _interopRequireDefault(require("lodash/isArray"));

var _mapValues2 = _interopRequireDefault(require("lodash/mapValues"));

var _isPlainObject2 = _interopRequireDefault(require("lodash/isPlainObject"));

var _isString2 = _interopRequireDefault(require("lodash/isString"));

var _each2 = _interopRequireDefault(require("lodash/each"));

var _isUndefined2 = _interopRequireDefault(require("lodash/isUndefined"));

var _camelCase2 = _interopRequireDefault(require("lodash/camelCase"));

var _upperFirst2 = _interopRequireDefault(require("lodash/upperFirst"));

var _jsonStringifySafe = _interopRequireDefault(require("json-stringify-safe"));

var _gatsbyCoreUtils = require("gatsby-core-utils");

var _semver = require("semver");

// @ts-check
const typePrefix = `Contentful`;

const makeTypeName = type => (0, _upperFirst2.default)((0, _camelCase2.default)(`${typePrefix} ${type}`));

const GATSBY_VERSION_MANIFEST_V2 = `4.3.0`;
const gatsbyVersion = typeof _gatsbyCoreUtils.getGatsbyVersion === `function` && (0, _gatsbyCoreUtils.getGatsbyVersion)() || `0.0.0`;
const gatsbyVersionIsPrerelease = (0, _semver.prerelease)(gatsbyVersion);
const shouldUpgradeGatsbyVersion = (0, _semver.lt)(gatsbyVersion, GATSBY_VERSION_MANIFEST_V2) && !gatsbyVersionIsPrerelease;

const getLocalizedField = ({
  field,
  locale,
  localesFallback
}) => {
  if (!field) {
    return null;
  }

  if (!(0, _isUndefined2.default)(field[locale.code])) {
    return field[locale.code];
  } else if (!(0, _isUndefined2.default)(locale.code) && !(0, _isUndefined2.default)(localesFallback[locale.code])) {
    return getLocalizedField({
      field,
      locale: {
        code: localesFallback[locale.code]
      },
      localesFallback
    });
  } else {
    return null;
  }
};

exports.getLocalizedField = getLocalizedField;

const buildFallbackChain = locales => {
  const localesFallback = {};
  (0, _each2.default)(locales, locale => localesFallback[locale.code] = locale.fallbackCode);
  return localesFallback;
};

exports.buildFallbackChain = buildFallbackChain;

const makeGetLocalizedField = ({
  locale,
  localesFallback
}) => field => getLocalizedField({
  field,
  locale,
  localesFallback
});

const makeId = ({
  spaceId,
  id,
  currentLocale,
  defaultLocale,
  type
}) => {
  const normalizedType = type.startsWith(`Deleted`) ? type.substring(`Deleted`.length) : type;
  return currentLocale === defaultLocale ? `${spaceId}___${id}___${normalizedType}` : `${spaceId}___${id}___${normalizedType}___${currentLocale}`;
};

exports.makeId = makeId;

const makeMakeId = ({
  currentLocale,
  defaultLocale,
  createNodeId
}) => (spaceId, id, type) => createNodeId(makeId({
  spaceId,
  id,
  currentLocale,
  defaultLocale,
  type
}));

const buildEntryList = ({
  contentTypeItems,
  currentSyncData
}) => {
  // Create buckets for each type sys.id that we care about (we will always want an array for each, even if its empty)
  const map = new Map(contentTypeItems.map(contentType => [contentType.sys.id, []])); // Now fill the buckets. Ignore entries for which there exists no bucket. (This happens when filterContentType is used)

  currentSyncData.entries.map(entry => {
    const arr = map.get(entry.sys.contentType.sys.id);

    if (arr) {
      arr.push(entry);
    }
  }); // Order is relevant, must map 1:1 to contentTypeItems array

  return contentTypeItems.map(contentType => map.get(contentType.sys.id));
};

exports.buildEntryList = buildEntryList;

const buildResolvableSet = ({
  entryList,
  existingNodes = [],
  assets = []
}) => {
  const resolvable = new Set();
  existingNodes.forEach(node => {
    // We need to add only root level resolvable (assets and entries)
    // Derived nodes (markdown or JSON) will be recreated if needed.
    resolvable.add(`${node.contentful_id}___${node.sys.type}`);
  });
  entryList.forEach(entries => {
    entries.forEach(entry => resolvable.add(`${entry.sys.id}___${entry.sys.type}`));
  });
  assets.forEach(assetItem => resolvable.add(`${assetItem.sys.id}___${assetItem.sys.type}`));
  return resolvable;
};

exports.buildResolvableSet = buildResolvableSet;

const buildForeignReferenceMap = ({
  contentTypeItems,
  entryList,
  resolvable,
  defaultLocale,
  space,
  useNameForId
}) => {
  const foreignReferenceMap = {};
  contentTypeItems.forEach((contentTypeItem, i) => {
    // Establish identifier for content type
    //  Use `name` if specified, otherwise, use internal id (usually a natural-language constant,
    //  but sometimes a base62 uuid generated by Contentful, hence the option)
    let contentTypeItemId;

    if (useNameForId) {
      contentTypeItemId = contentTypeItem.name.toLowerCase();
    } else {
      contentTypeItemId = contentTypeItem.sys.id.toLowerCase();
    }

    entryList[i].forEach(entryItem => {
      const entryItemFields = entryItem.fields;
      Object.keys(entryItemFields).forEach(entryItemFieldKey => {
        if (entryItemFields[entryItemFieldKey]) {
          var _entryItemFieldValue$;

          const entryItemFieldValue = entryItemFields[entryItemFieldKey][defaultLocale]; // If this is an array of single reference object
          // add to the reference map, otherwise ignore.

          if (Array.isArray(entryItemFieldValue)) {
            if (entryItemFieldValue[0] && entryItemFieldValue[0].sys && entryItemFieldValue[0].sys.type && entryItemFieldValue[0].sys.id) {
              entryItemFieldValue.forEach(v => {
                const key = `${v.sys.id}___${v.sys.linkType || v.sys.type}`; // Don't create link to an unresolvable field.

                if (!resolvable.has(key)) {
                  return;
                }

                if (!foreignReferenceMap[key]) {
                  foreignReferenceMap[key] = [];
                }

                foreignReferenceMap[key].push({
                  name: `${contentTypeItemId}___NODE`,
                  id: entryItem.sys.id,
                  spaceId: space.sys.id,
                  type: entryItem.sys.type
                });
              });
            }
          } else if (entryItemFieldValue !== null && entryItemFieldValue !== void 0 && (_entryItemFieldValue$ = entryItemFieldValue.sys) !== null && _entryItemFieldValue$ !== void 0 && _entryItemFieldValue$.type && entryItemFieldValue.sys.id) {
            const key = `${entryItemFieldValue.sys.id}___${entryItemFieldValue.sys.linkType || entryItemFieldValue.sys.type}`; // Don't create link to an unresolvable field.

            if (!resolvable.has(key)) {
              return;
            }

            if (!foreignReferenceMap[key]) {
              foreignReferenceMap[key] = [];
            }

            foreignReferenceMap[key].push({
              name: `${contentTypeItemId}___NODE`,
              id: entryItem.sys.id,
              spaceId: space.sys.id,
              type: entryItem.sys.type
            });
          }
        }
      });
    });
  });
  return foreignReferenceMap;
};

exports.buildForeignReferenceMap = buildForeignReferenceMap;

function prepareTextNode(id, node, key, text) {
  const str = (0, _isString2.default)(text) ? text : ``;
  const textNode = {
    id,
    parent: node.id,
    children: [],
    [key]: str,
    internal: {
      type: (0, _camelCase2.default)(`${node.internal.type} ${key} TextNode`),
      mediaType: `text/markdown`,
      content: str,
      // entryItem.sys.updatedAt is source of truth from contentful
      contentDigest: node.updatedAt
    },
    sys: {
      type: `TextNode`
    }
  };
  node.children = node.children.concat([id]);
  return textNode;
}

function prepareJSONNode(id, node, key, content) {
  const str = JSON.stringify(content);
  const JSONNode = { ...((0, _isPlainObject2.default)(content) ? { ...content
    } : {
      content: content
    }),
    id,
    parent: node.id,
    children: [],
    internal: {
      type: (0, _camelCase2.default)(`${node.internal.type} ${key} JSONNode`),
      mediaType: `application/json`,
      content: str,
      // entryItem.sys.updatedAt is source of truth from contentful
      contentDigest: node.updatedAt
    },
    sys: {
      type: `JsonNode`
    }
  };
  node.children = node.children.concat([id]);
  return JSONNode;
}

let numberOfContentSyncDebugLogs = 0;
const maxContentSyncDebugLogTimes = 50;
let warnOnceForNoSupport = false;
let warnOnceToUpgradeGatsby = false;
/**
 * This fn creates node manifests which are used for Gatsby Cloud Previews via the Content Sync API/feature.
 * Content Sync routes a user from Contentful to a page created from the entry data they're interested in previewing.
 */

function contentfulCreateNodeManifest({
  pluginConfig,
  entryItem,
  entryNode,
  space,
  unstable_createNodeManifest
}) {
  const isPreview = pluginConfig.get(`host`) === `preview.contentful.com`;
  const createNodeManifestIsSupported = typeof unstable_createNodeManifest === `function`;
  const shouldCreateNodeManifest = isPreview && createNodeManifestIsSupported;
  const updatedAt = entryItem.sys.updatedAt;
  const manifestId = `${space.sys.id}-${entryItem.sys.id}-${updatedAt}`;

  if (process.env.CONTENTFUL_DEBUG_NODE_MANIFEST === `true` && numberOfContentSyncDebugLogs <= maxContentSyncDebugLogTimes) {
    numberOfContentSyncDebugLogs++;
    console.info(JSON.stringify({
      isPreview,
      createNodeManifestIsSupported,
      shouldCreateNodeManifest,
      manifestId,
      entryItemSysUpdatedAt: updatedAt
    }));
  }

  if (shouldCreateNodeManifest) {
    if (shouldUpgradeGatsbyVersion && !warnOnceToUpgradeGatsby) {
      console.warn(`Your site is doing more work than it needs to for Preview, upgrade to Gatsby ^${GATSBY_VERSION_MANIFEST_V2} for better performance`);
      warnOnceToUpgradeGatsby = true;
    }

    unstable_createNodeManifest({
      manifestId,
      node: entryNode,
      updatedAtUTC: updatedAt
    });
  } else if (isPreview && !createNodeManifestIsSupported && !warnOnceForNoSupport) {
    console.warn(`Contentful: Your version of Gatsby core doesn't support Content Sync (via the unstable_createNodeManifest action). Please upgrade to the latest version to use Content Sync in your site.`);
    warnOnceForNoSupport = true;
  }
}

const createNodesForContentType = ({
  contentTypeItem,
  restrictedNodeFields,
  conflictFieldPrefix,
  entries,
  unstable_createNodeManifest,
  createNode,
  createNodeId,
  getNode,
  resolvable,
  foreignReferenceMap,
  defaultLocale,
  locales,
  space,
  useNameForId,
  pluginConfig
}) => {
  // Establish identifier for content type
  //  Use `name` if specified, otherwise, use internal id (usually a natural-language constant,
  //  but sometimes a base62 uuid generated by Contentful, hence the option)
  let contentTypeItemId;

  if (useNameForId) {
    contentTypeItemId = contentTypeItem.name;
  } else {
    contentTypeItemId = contentTypeItem.sys.id;
  }

  const createNodePromises = []; // Create a node for the content type

  const contentTypeNode = {
    id: createNodeId(contentTypeItemId),
    parent: null,
    children: [],
    name: contentTypeItem.name,
    displayField: contentTypeItem.displayField,
    description: contentTypeItem.description,
    internal: {
      type: `${makeTypeName(`ContentType`)}`,
      contentDigest: contentTypeItem.sys.updatedAt
    },
    sys: {
      type: contentTypeItem.sys.type
    }
  };
  createNodePromises.push(createNode(contentTypeNode));
  locales.forEach(locale => {
    const localesFallback = buildFallbackChain(locales);
    const mId = makeMakeId({
      currentLocale: locale.code,
      defaultLocale,
      createNodeId
    });
    const getField = makeGetLocalizedField({
      locale,
      localesFallback
    }); // Warn about any field conflicts

    const conflictFields = [];
    contentTypeItem.fields.forEach(contentTypeItemField => {
      const fieldName = contentTypeItemField.id;

      if (restrictedNodeFields.includes(fieldName)) {
        console.log(`Restricted field found for ContentType ${contentTypeItemId} and field ${fieldName}. Prefixing with ${conflictFieldPrefix}.`);
        conflictFields.push(fieldName);
      }
    });
    const childrenNodes = []; // First create nodes for each of the entries of that content type

    const entryNodes = entries.map(entryItem => {
      const entryNodeId = mId(space.sys.id, entryItem.sys.id, entryItem.sys.type);
      const existingNode = getNode(entryNodeId);

      if ((existingNode === null || existingNode === void 0 ? void 0 : existingNode.updatedAt) === entryItem.sys.updatedAt) {
        // The Contentful model has `.sys.updatedAt` leading for an entry. If the updatedAt value
        // of an entry did not change, then we can trust that none of its children were changed either.
        return null;
      } // Get localized fields.


      const entryItemFields = (0, _mapValues2.default)(entryItem.fields, (v, k) => {
        const fieldProps = contentTypeItem.fields.find(field => field.id === k);
        const localizedField = fieldProps.localized ? getField(v) : v[defaultLocale];
        return localizedField;
      }); // Prefix any conflicting fields
      // https://github.com/gatsbyjs/gatsby/pull/1084#pullrequestreview-41662888

      conflictFields.forEach(conflictField => {
        entryItemFields[`${conflictFieldPrefix}${conflictField}`] = entryItemFields[conflictField];
        delete entryItemFields[conflictField];
      }); // Add linkages to other nodes based on foreign references

      Object.keys(entryItemFields).forEach(entryItemFieldKey => {
        if (entryItemFields[entryItemFieldKey]) {
          var _entryItemFieldValue$4;

          const entryItemFieldValue = entryItemFields[entryItemFieldKey];

          if (Array.isArray(entryItemFieldValue)) {
            var _entryItemFieldValue$2, _entryItemFieldValue$3;

            if (((_entryItemFieldValue$2 = entryItemFieldValue[0]) === null || _entryItemFieldValue$2 === void 0 ? void 0 : (_entryItemFieldValue$3 = _entryItemFieldValue$2.sys) === null || _entryItemFieldValue$3 === void 0 ? void 0 : _entryItemFieldValue$3.type) === `Link`) {
              // Check if there are any values in entryItemFieldValue to prevent
              // creating an empty node field in case when original key field value
              // is empty due to links to missing entities
              const resolvableEntryItemFieldValue = entryItemFieldValue.filter(function (v) {
                return resolvable.has(`${v.sys.id}___${v.sys.linkType || v.sys.type}`);
              }).map(function (v) {
                return mId(space.sys.id, v.sys.id, v.sys.linkType || v.sys.type);
              });

              if (resolvableEntryItemFieldValue.length !== 0) {
                entryItemFields[`${entryItemFieldKey}___NODE`] = resolvableEntryItemFieldValue;
              }

              delete entryItemFields[entryItemFieldKey];
            }
          } else if ((entryItemFieldValue === null || entryItemFieldValue === void 0 ? void 0 : (_entryItemFieldValue$4 = entryItemFieldValue.sys) === null || _entryItemFieldValue$4 === void 0 ? void 0 : _entryItemFieldValue$4.type) === `Link`) {
            if (resolvable.has(`${entryItemFieldValue.sys.id}___${entryItemFieldValue.sys.linkType || entryItemFieldValue.sys.type}`)) {
              entryItemFields[`${entryItemFieldKey}___NODE`] = mId(space.sys.id, entryItemFieldValue.sys.id, entryItemFieldValue.sys.linkType || entryItemFieldValue.sys.type);
            }

            delete entryItemFields[entryItemFieldKey];
          }
        }
      }); // Add reverse linkages if there are any for this node

      const foreignReferences = foreignReferenceMap[`${entryItem.sys.id}___${entryItem.sys.type}`];

      if (foreignReferences) {
        foreignReferences.forEach(foreignReference => {
          const existingReference = entryItemFields[foreignReference.name];

          if (existingReference) {
            // If the existing reference is a string, we're dealing with a
            // many-to-one reference which has already been recorded, so we can
            // skip it. However, if it is an array, add it:
            if (Array.isArray(existingReference)) {
              entryItemFields[foreignReference.name].push(mId(foreignReference.spaceId, foreignReference.id, foreignReference.type));
            }
          } else {
            // If there is one foreign reference, there can be many.
            // Best to be safe and put it in an array to start with.
            entryItemFields[foreignReference.name] = [mId(foreignReference.spaceId, foreignReference.id, foreignReference.type)];
          }
        });
      }

      let entryNode = {
        id: entryNodeId,
        spaceId: space.sys.id,
        contentful_id: entryItem.sys.id,
        createdAt: entryItem.sys.createdAt,
        updatedAt: entryItem.sys.updatedAt,
        parent: contentTypeItemId,
        children: [],
        internal: {
          type: `${makeTypeName(contentTypeItemId)}`
        },
        sys: {
          type: entryItem.sys.type
        }
      };
      contentfulCreateNodeManifest({
        pluginConfig,
        entryItem,
        entryNode,
        space,
        unstable_createNodeManifest
      }); // Revision applies to entries, assets, and content types

      if (entryItem.sys.revision) {
        entryNode.sys.revision = entryItem.sys.revision;
      } // Content type applies to entries only


      if (entryItem.sys.contentType) {
        entryNode.sys.contentType = entryItem.sys.contentType;
      } // Replace text fields with text nodes so we can process their markdown
      // into HTML.


      Object.keys(entryItemFields).forEach(entryItemFieldKey => {
        // Ignore fields with "___node" as they're already handled
        // and won't be a text field.
        if (entryItemFieldKey.includes(`___`)) {
          return;
        }

        const fieldType = contentTypeItem.fields.find(f => (restrictedNodeFields.includes(f.id) ? `${conflictFieldPrefix}${f.id}` : f.id) === entryItemFieldKey).type;

        if (fieldType === `Text`) {
          const textNodeId = createNodeId(`${entryNodeId}${entryItemFieldKey}TextNode`); // The Contentful model has `.sys.updatedAt` leading for an entry. If the updatedAt value
          // of an entry did not change, then we can trust that none of its children were changed either.
          // (That's why child nodes use the updatedAt of the parent node as their digest, too)

          const existingNode = getNode(textNodeId);

          if ((existingNode === null || existingNode === void 0 ? void 0 : existingNode.updatedAt) !== entryItem.sys.updatedAt) {
            const textNode = prepareTextNode(textNodeId, entryNode, entryItemFieldKey, entryItemFields[entryItemFieldKey]);
            childrenNodes.push(textNode);
          }

          entryItemFields[`${entryItemFieldKey}___NODE`] = textNodeId;
          delete entryItemFields[entryItemFieldKey];
        } else if (fieldType === `RichText` && (0, _isPlainObject2.default)(entryItemFields[entryItemFieldKey])) {
          const fieldValue = entryItemFields[entryItemFieldKey];
          const rawReferences = []; // Locate all Contentful Links within the rich text data

          const traverse = obj => {
            // eslint-disable-next-line guard-for-in
            for (const k in obj) {
              const v = obj[k];

              if (v && v.sys && v.sys.type === `Link`) {
                rawReferences.push(v);
              } else if (v && typeof v === `object`) {
                traverse(v);
              }
            }
          };

          traverse(fieldValue); // Build up resolvable reference list

          const resolvableReferenceIds = new Set();
          rawReferences.filter(function (v) {
            return resolvable.has(`${v.sys.id}___${v.sys.linkType || v.sys.type}`);
          }).forEach(function (v) {
            resolvableReferenceIds.add(mId(space.sys.id, v.sys.id, v.sys.linkType || v.sys.type));
          });
          entryItemFields[entryItemFieldKey] = {
            raw: (0, _jsonStringifySafe.default)(fieldValue),
            references___NODE: [...resolvableReferenceIds]
          };
        } else if (fieldType === `Object` && (0, _isPlainObject2.default)(entryItemFields[entryItemFieldKey])) {
          const jsonNodeId = createNodeId(`${entryNodeId}${entryItemFieldKey}JSONNode`); // The Contentful model has `.sys.updatedAt` leading for an entry. If the updatedAt value
          // of an entry did not change, then we can trust that none of its children were changed either.
          // (That's why child nodes use the updatedAt of the parent node as their digest, too)

          const existingNode = getNode(jsonNodeId);

          if ((existingNode === null || existingNode === void 0 ? void 0 : existingNode.updatedAt) !== entryItem.sys.updatedAt) {
            const jsonNode = prepareJSONNode(jsonNodeId, entryNode, entryItemFieldKey, entryItemFields[entryItemFieldKey]);
            childrenNodes.push(jsonNode);
          }

          entryItemFields[`${entryItemFieldKey}___NODE`] = jsonNodeId;
          delete entryItemFields[entryItemFieldKey];
        } else if (fieldType === `Object` && (0, _isArray2.default)(entryItemFields[entryItemFieldKey])) {
          entryItemFields[`${entryItemFieldKey}___NODE`] = [];
          entryItemFields[entryItemFieldKey].forEach((obj, i) => {
            const jsonNodeId = createNodeId(`${entryNodeId}${entryItemFieldKey}${i}JSONNode`); // The Contentful model has `.sys.updatedAt` leading for an entry. If the updatedAt value
            // of an entry did not change, then we can trust that none of its children were changed either.
            // (That's why child nodes use the updatedAt of the parent node as their digest, too)

            const existingNode = getNode(jsonNodeId);

            if ((existingNode === null || existingNode === void 0 ? void 0 : existingNode.updatedAt) !== entryItem.sys.updatedAt) {
              const jsonNode = prepareJSONNode(jsonNodeId, entryNode, entryItemFieldKey, obj);
              childrenNodes.push(jsonNode);
            }

            entryItemFields[`${entryItemFieldKey}___NODE`].push(jsonNodeId);
          });
          delete entryItemFields[entryItemFieldKey];
        }
      });
      entryNode = { ...entryItemFields,
        ...entryNode,
        node_locale: locale.code
      }; // The content of an entry is guaranteed to be updated if and only if the .sys.updatedAt field changed

      entryNode.internal.contentDigest = entryItem.sys.updatedAt; // Link tags

      if (pluginConfig.get(`enableTags`)) {
        entryNode.metadata = {
          tags___NODE: entryItem.metadata.tags.map(tag => createNodeId(`ContentfulTag__${space.sys.id}__${tag.sys.id}`))
        };
      }

      return entryNode;
    }).filter(Boolean);
    entryNodes.forEach(entryNode => {
      createNodePromises.push(createNode(entryNode));
    });
    childrenNodes.forEach(entryNode => {
      createNodePromises.push(createNode(entryNode));
    });
  });
  return createNodePromises;
};

exports.createNodesForContentType = createNodesForContentType;

const createAssetNodes = ({
  assetItem,
  createNode,
  createNodeId,
  defaultLocale,
  locales,
  space,
  pluginConfig
}) => {
  const createNodePromises = [];
  locales.forEach(locale => {
    var _getField, _assetItem$fields, _file$details$image$w, _file$details, _file$details$image, _file$details$image$h, _file$details2, _file$details2$image, _file$details$size, _file$details3;

    const localesFallback = buildFallbackChain(locales);
    const mId = makeMakeId({
      currentLocale: locale.code,
      defaultLocale,
      createNodeId
    });
    const getField = makeGetLocalizedField({
      locale,
      localesFallback
    });
    const file = (_getField = getField((_assetItem$fields = assetItem.fields) === null || _assetItem$fields === void 0 ? void 0 : _assetItem$fields.file)) !== null && _getField !== void 0 ? _getField : null; // Skip empty and unprocessed assets in Preview API

    if (!file || !file.url || !file.contentType || !file.fileName) {
      return;
    }

    const assetNode = {
      contentful_id: assetItem.sys.id,
      spaceId: space.sys.id,
      id: mId(space.sys.id, assetItem.sys.id, assetItem.sys.type),
      createdAt: assetItem.sys.createdAt,
      updatedAt: assetItem.sys.updatedAt,
      parent: null,
      children: [],
      file,
      title: assetItem.fields.title ? getField(assetItem.fields.title) : ``,
      description: assetItem.fields.description ? getField(assetItem.fields.description) : ``,
      node_locale: locale.code,
      internal: {
        type: `${makeTypeName(`Asset`)}`
      },
      sys: {
        type: assetItem.sys.type
      },
      url: `https:${file.url}`,
      placeholderUrl: `https:${file.url}?w=%width%&h=%height%`,
      // These fields are optional for edge cases in the Preview API and Contentfuls asset processing
      mimeType: file.contentType,
      filename: file.fileName,
      width: (_file$details$image$w = (_file$details = file.details) === null || _file$details === void 0 ? void 0 : (_file$details$image = _file$details.image) === null || _file$details$image === void 0 ? void 0 : _file$details$image.width) !== null && _file$details$image$w !== void 0 ? _file$details$image$w : null,
      height: (_file$details$image$h = (_file$details2 = file.details) === null || _file$details2 === void 0 ? void 0 : (_file$details2$image = _file$details2.image) === null || _file$details2$image === void 0 ? void 0 : _file$details2$image.height) !== null && _file$details$image$h !== void 0 ? _file$details$image$h : null,
      size: (_file$details$size = (_file$details3 = file.details) === null || _file$details3 === void 0 ? void 0 : _file$details3.size) !== null && _file$details$size !== void 0 ? _file$details$size : null
    }; // Link tags

    if (pluginConfig.get(`enableTags`)) {
      assetNode.metadata = {
        tags___NODE: assetItem.metadata.tags.map(tag => createNodeId(`ContentfulTag__${space.sys.id}__${tag.sys.id}`))
      };
    } // Revision applies to entries, assets, and content types


    if (assetItem.sys.revision) {
      assetNode.sys.revision = assetItem.sys.revision;
    } // The content of an entry is guaranteed to be updated if and only if the .sys.updatedAt field changed


    assetNode.internal.contentDigest = assetItem.sys.updatedAt; // if the node hasn't changed, createNode may return `undefined` instead of a Promise on some versions of Gatsby

    const maybePromise = createNode(assetNode);
    createNodePromises.push(maybePromise !== null && maybePromise !== void 0 && maybePromise.then ? maybePromise.then(() => assetNode) : assetNode);
  });
  return createNodePromises;
};

exports.createAssetNodes = createAssetNodes;