"use strict";

exports.__esModule = true;
exports.ImageResizingBehavior = exports.ImagePlaceholderType = exports.ImageLayoutType = exports.ImageFormatType = exports.ImageCropFocusType = void 0;

var _graphql = require("gatsby/graphql");

// @ts-check
const ImageFormatType = new _graphql.GraphQLEnumType({
  name: `ContentfulImageFormat`,
  values: {
    NO_CHANGE: {
      value: ``
    },
    AUTO: {
      value: ``
    },
    JPG: {
      value: `jpg`
    },
    PNG: {
      value: `png`
    },
    WEBP: {
      value: `webp`
    },
    AVIF: {
      value: `avif`
    }
  }
});
exports.ImageFormatType = ImageFormatType;
const ImageLayoutType = new _graphql.GraphQLEnumType({
  name: `ContentfulImageLayout`,
  values: {
    FIXED: {
      value: `fixed`
    },
    FULL_WIDTH: {
      value: `fullWidth`
    },
    CONSTRAINED: {
      value: `constrained`
    }
  }
});
exports.ImageLayoutType = ImageLayoutType;
const ImagePlaceholderType = new _graphql.GraphQLEnumType({
  name: `ContentfulImagePlaceholder`,
  values: {
    DOMINANT_COLOR: {
      value: `dominantColor`
    },
    TRACED_SVG: {
      value: `tracedSVG`
    },
    BLURRED: {
      value: `blurred`
    },
    NONE: {
      value: `none`
    }
  }
});
exports.ImagePlaceholderType = ImagePlaceholderType;
const ImageResizingBehavior = new _graphql.GraphQLEnumType({
  name: `ImageResizingBehavior`,
  values: {
    NO_CHANGE: {
      value: ``
    },
    PAD: {
      value: `pad`,
      description: `Same as the default resizing, but adds padding so that the generated image has the specified dimensions.`
    },
    CROP: {
      value: `crop`,
      description: `Crop a part of the original image to match the specified size.`
    },
    FILL: {
      value: `fill`,
      description: `Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled.`
    },
    THUMB: {
      value: `thumb`,
      description: `When used in association with the f parameter below, creates a thumbnail from the image based on a focus area.`
    },
    SCALE: {
      value: `scale`,
      description: `Scale the image regardless of the original aspect ratio.`
    }
  }
});
exports.ImageResizingBehavior = ImageResizingBehavior;
const ImageCropFocusType = new _graphql.GraphQLEnumType({
  name: `ContentfulImageCropFocus`,
  values: {
    TOP: {
      value: `top`
    },
    TOP_LEFT: {
      value: `top_left`
    },
    TOP_RIGHT: {
      value: `top_right`
    },
    BOTTOM: {
      value: `bottom`
    },
    BOTTOM_RIGHT: {
      value: `bottom_left`
    },
    BOTTOM_LEFT: {
      value: `bottom_right`
    },
    RIGHT: {
      value: `right`
    },
    LEFT: {
      value: `left`
    },
    FACE: {
      value: `face`
    },
    FACES: {
      value: `faces`
    },
    CENTER: {
      value: `center`
    }
  }
});
exports.ImageCropFocusType = ImageCropFocusType;