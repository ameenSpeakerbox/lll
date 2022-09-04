"use strict";

exports.__esModule = true;
exports.useContentfulImage = useContentfulImage;

var _gatsbyPluginImage = require("gatsby-plugin-image");

var _react = require("react");

var _imageHelpers = require("./image-helpers");

// @ts-check
function useContentfulImage({
  image,
  ...props
}) {
  return (0, _react.useMemo)(() => (0, _gatsbyPluginImage.getImageData)({
    baseUrl: image.url,
    sourceWidth: image.width,
    sourceHeight: image.height,
    backgroundColor: null,
    urlBuilder: ({
      baseUrl,
      width,
      height,
      options,
      format
    }) => (0, _imageHelpers.createUrl)(baseUrl, { ...options,
      height,
      width,
      toFormat: format
    }),
    pluginName: `gatsby-source-contentful`,
    ...props
  }), [image.url, image.width, image.height, props]);
}