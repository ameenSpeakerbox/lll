"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.generateImageSource = generateImageSource;
exports.resolveGatsbyImageData = resolveGatsbyImageData;

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _fetchRemoteFile = require("gatsby-core-utils/fetch-remote-file");

var _path = _interopRequireDefault(require("path"));

var _imageHelpers = require("./image-helpers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Promises that rejected should stay in this map. Otherwise remove promise and put their data in resolvedBase64Cache
const inFlightBase64Cache = new Map(); // This cache contains the resolved base64 fetches. This prevents async calls for promises that have resolved.
// The images are based on urls with w=20 and should be relatively small (<2kb) but it does stick around in memory

const resolvedBase64Cache = new Map(); // Note: this may return a Promise<body>, body (sync), or null

const getBase64Image = (imageProps, cache) => {
  if (!imageProps) {
    return null;
  } // We only support images that are delivered through Contentful's Image API


  if (imageProps.baseUrl.indexOf(`images.ctfassets.net`) === -1) {
    return null;
  } // Keep aspect ratio, image format and other transform options


  const {
    aspectRatio
  } = imageProps;
  const originalFormat = imageProps.image.file.contentType.split(`/`)[1];
  const toFormat = imageProps.options.toFormat;
  const imageOptions = { ...imageProps.options,
    toFormat,
    width: 20,
    height: Math.floor(20 / aspectRatio)
  };
  const requestUrl = (0, _imageHelpers.createUrl)(imageProps.baseUrl, imageOptions); // Prefer to return data sync if we already have it

  const alreadyFetched = resolvedBase64Cache.get(requestUrl);

  if (alreadyFetched) {
    return alreadyFetched;
  } // If already in flight for this url return the same promise as the first call


  const inFlight = inFlightBase64Cache.get(requestUrl);

  if (inFlight) {
    return inFlight;
  }

  const loadImage = async () => {
    const {
      file: {
        contentType
      }
    } = imageProps.image;

    const extension = _imageHelpers.mimeTypeExtensions.get(contentType);

    const absolutePath = await (0, _fetchRemoteFile.fetchRemoteFile)({
      url: requestUrl,
      directory: cache.directory,
      ext: extension,
      cacheKey: imageProps.image.internal.contentDigest
    });
    const base64 = (await _fsExtra.default.readFile(absolutePath)).toString(`base64`);
    return `data:image/${toFormat || originalFormat};base64,${base64}`;
  };

  const promise = loadImage();
  inFlightBase64Cache.set(requestUrl, promise);
  return promise.then(body => {
    inFlightBase64Cache.delete(requestUrl);
    resolvedBase64Cache.set(requestUrl, body);
    return body;
  });
};

const getTracedSVG = async ({
  image,
  options,
  cache
}) => {
  const {
    traceSVG
  } = await Promise.resolve().then(() => _interopRequireWildcard(require(`gatsby-plugin-sharp`)));
  const {
    file: {
      contentType,
      url: imgUrl,
      fileName
    }
  } = image;

  if (contentType.indexOf(`image/`) !== 0) {
    return null;
  }

  const extension = _imageHelpers.mimeTypeExtensions.get(contentType);

  const url = (0, _imageHelpers.createUrl)(imgUrl, options);

  const name = _path.default.basename(fileName, extension);

  const absolutePath = await (0, _fetchRemoteFile.fetchRemoteFile)({
    url,
    name,
    directory: cache.directory,
    ext: extension,
    cacheKey: image.internal.contentDigest
  });
  return traceSVG({
    file: {
      internal: image.internal,
      name: image.file.fileName,
      extension,
      absolutePath
    },
    args: {
      toFormat: ``,
      ...options.tracedSVGOptions
    },
    fileArgs: options
  });
};

const getDominantColor = async ({
  image,
  options,
  cache
}) => {
  let pluginSharp;

  try {
    pluginSharp = await Promise.resolve().then(() => _interopRequireWildcard(require(`gatsby-plugin-sharp`)));
  } catch (e) {
    console.error(`[gatsby-source-contentful] Please install gatsby-plugin-sharp`, e);
    return `rgba(0,0,0,0.5)`;
  }

  try {
    const {
      file: {
        contentType,
        url: imgUrl,
        fileName
      }
    } = image;

    if (contentType.indexOf(`image/`) !== 0) {
      return null;
    } // 256px should be enough to properly detect the dominant color


    if (!options.width) {
      options.width = 256;
    }

    const extension = _imageHelpers.mimeTypeExtensions.get(contentType);

    const url = (0, _imageHelpers.createUrl)(imgUrl, options);

    const name = _path.default.basename(fileName, extension);

    const absolutePath = await (0, _fetchRemoteFile.fetchRemoteFile)({
      url,
      name,
      directory: cache.directory,
      ext: extension,
      cacheKey: image.internal.contentDigest
    });

    if (!(`getDominantColor` in pluginSharp)) {
      console.error(`[gatsby-source-contentful] Please upgrade gatsby-plugin-sharp`);
      return `rgba(0,0,0,0.5)`;
    }

    return pluginSharp.getDominantColor(absolutePath);
  } catch (e) {
    console.error(`[gatsby-source-contentful] Could not getDominantColor from image`, e);
    console.error(e);
    return `rgba(0,0,0,0.5)`;
  }
};

function getBasicImageProps(image, args) {
  let aspectRatio;

  if (args.width && args.height) {
    aspectRatio = args.width / args.height;
  } else {
    aspectRatio = image.file.details.image.width / image.file.details.image.height;
  }

  return {
    baseUrl: image.file.url,
    contentType: image.file.contentType,
    aspectRatio,
    width: image.file.details.image.width,
    height: image.file.details.image.height
  };
} // Generate image source data for gatsby-plugin-image


function generateImageSource(filename, width, height, toFormat, _fit, // We use resizingBehavior instead
imageTransformOptions) {
  const imageFormatDefaults = imageTransformOptions[`${toFormat}Options`];

  if (imageFormatDefaults && Object.keys(imageFormatDefaults).length !== 0 && imageFormatDefaults.constructor === Object) {
    imageTransformOptions = { ...imageTransformOptions,
      ...imageFormatDefaults
    };
  }

  const {
    jpegProgressive,
    quality,
    cropFocus,
    backgroundColor,
    resizingBehavior,
    cornerRadius
  } = imageTransformOptions; // Ensure we stay within Contentfuls Image API limits

  if (width > _imageHelpers.CONTENTFUL_IMAGE_MAX_SIZE) {
    height = Math.floor(height / width * _imageHelpers.CONTENTFUL_IMAGE_MAX_SIZE);
    width = _imageHelpers.CONTENTFUL_IMAGE_MAX_SIZE;
  }

  if (height > _imageHelpers.CONTENTFUL_IMAGE_MAX_SIZE) {
    width = Math.floor(width / height * _imageHelpers.CONTENTFUL_IMAGE_MAX_SIZE);
    height = _imageHelpers.CONTENTFUL_IMAGE_MAX_SIZE;
  }

  if (!_imageHelpers.validImageFormats.has(toFormat)) {
    console.warn(`[gatsby-source-contentful] Invalid image format "${toFormat}". Supported types are jpg, png, webp and avif"`);
    return undefined;
  }

  const src = (0, _imageHelpers.createUrl)(filename, {
    width,
    height,
    toFormat,
    resizingBehavior,
    background: backgroundColor === null || backgroundColor === void 0 ? void 0 : backgroundColor.replace(`#`, `rgb:`),
    quality,
    jpegProgressive,
    cropFocus,
    cornerRadius
  });
  return {
    width,
    height,
    format: toFormat,
    src
  };
}

async function resolveGatsbyImageData(image, options, context, info, {
  cache
}) {
  if (!(0, _imageHelpers.isImage)(image)) return null;
  const {
    generateImageData
  } = await Promise.resolve().then(() => _interopRequireWildcard(require(`gatsby-plugin-image`)));
  const {
    getPluginOptions,
    doMergeDefaults
  } = await Promise.resolve().then(() => _interopRequireWildcard(require(`gatsby-plugin-sharp/plugin-options`)));
  const sharpOptions = getPluginOptions();
  const userDefaults = sharpOptions.defaults;
  const defaults = {
    tracedSVGOptions: {},
    blurredOptions: {},
    jpgOptions: {},
    pngOptions: {},
    webpOptions: {},
    gifOptions: {},
    avifOptions: {},
    quality: 50,
    placeholder: `dominantColor`,
    ...userDefaults
  };
  options = doMergeDefaults(options, defaults);
  const {
    baseUrl,
    contentType,
    width,
    height
  } = getBasicImageProps(image, options);
  let [, format] = contentType.split(`/`);

  if (format === `jpeg`) {
    format = `jpg`;
  } // Translate Contentful resize parameter to gatsby-plugin-image css object fit


  const fitMap = new Map([[`pad`, `contain`], [`fill`, `cover`], [`scale`, `fill`], [`crop`, `cover`], [`thumb`, `cover`]]);
  const imageProps = generateImageData({ ...options,
    pluginName: `gatsby-source-contentful`,
    sourceMetadata: {
      width,
      height,
      format
    },
    filename: baseUrl,
    generateImageSource,
    fit: fitMap.get(options.resizingBehavior),
    options
  });
  let placeholderDataURI = null;

  if (options.placeholder === `dominantColor`) {
    imageProps.backgroundColor = await getDominantColor({
      image,
      options,
      cache
    });
  }

  if (options.placeholder === `blurred`) {
    placeholderDataURI = await getBase64Image({
      baseUrl,
      image,
      options
    }, cache);
  }

  if (options.placeholder === `tracedSVG`) {
    placeholderDataURI = await getTracedSVG({
      image,
      options,
      cache
    });
  }

  if (placeholderDataURI) {
    imageProps.placeholder = {
      fallback: placeholderDataURI
    };
  }

  return imageProps;
}