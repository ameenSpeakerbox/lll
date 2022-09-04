"use strict";

exports.__esModule = true;
exports.setFieldsOnGraphQLNodeType = setFieldsOnGraphQLNodeType;

var _commonTags = require("common-tags");

var _graphql = require("gatsby/graphql");

var _gatsbyPluginImage = require("./gatsby-plugin-image");

var _schemes = require("./schemes");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

async function setFieldsOnGraphQLNodeType({
  type,
  cache
}) {
  if (type.name !== `ContentfulAsset`) {
    return {};
  } // gatsby-plugin-image


  const getGatsbyImageData = async () => {
    const {
      getGatsbyImageFieldConfig
    } = await Promise.resolve().then(() => _interopRequireWildcard(require(`gatsby-plugin-image/graphql-utils`)));
    const fieldConfig = getGatsbyImageFieldConfig(async (...args) => (0, _gatsbyPluginImage.resolveGatsbyImageData)(...args, {
      cache
    }), {
      jpegProgressive: {
        type: _graphql.GraphQLBoolean,
        defaultValue: true
      },
      resizingBehavior: {
        type: _schemes.ImageResizingBehavior
      },
      cropFocus: {
        type: _schemes.ImageCropFocusType
      },
      cornerRadius: {
        type: _graphql.GraphQLInt,
        defaultValue: 0,
        description: (0, _commonTags.stripIndent)`
         Desired corner radius in pixels. Results in an image with rounded corners.
         Pass \`-1\` for a full circle/ellipse.`
      },
      quality: {
        type: _graphql.GraphQLInt
      }
    });
    fieldConfig.type = _graphql.GraphQLJSON;
    return fieldConfig;
  };

  const gatsbyImageData = await getGatsbyImageData();
  return {
    gatsbyImageData
  };
}