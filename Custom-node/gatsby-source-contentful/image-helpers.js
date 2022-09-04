"use strict";

exports.__esModule = true;
exports.CONTENTFUL_IMAGE_MAX_SIZE = void 0;
exports.createUrl = createUrl;
exports.isImage = isImage;
exports.validImageFormats = exports.mimeTypeExtensions = void 0;

var _url = require("url");

// @ts-check
// Maximum value for size parameters in Contentful Image API
// @see https://www.contentful.com/developers/docs/references/images-api/#/reference/resizing-&-cropping/specify-width-&-height
const CONTENTFUL_IMAGE_MAX_SIZE = 4000; // Supported Image Formats by the Contentful Image API (https://www.contentful.com/developers/docs/references/images-api/#/reference/changing-formats/image-format)

exports.CONTENTFUL_IMAGE_MAX_SIZE = CONTENTFUL_IMAGE_MAX_SIZE;
const validImageFormats = new Set([`jpg`, `png`, `webp`, `gif`, `avif`]); // Determine the proper file extension based on mime type

exports.validImageFormats = validImageFormats;
const mimeTypeExtensions = new Map([[`image/jpeg`, `.jpg`], [`image/jpg`, `.jpg`], [`image/gif`, `.gif`], [`image/png`, `.png`], [`image/webp`, `.webp`], [`image/avif`, `.avif`]]); // Check if Contentful asset is actually an image

exports.mimeTypeExtensions = mimeTypeExtensions;

function isImage(image) {
  var _image$file;

  return mimeTypeExtensions.has(image === null || image === void 0 ? void 0 : (_image$file = image.file) === null || _image$file === void 0 ? void 0 : _image$file.contentType);
} // Create a Contentful Image API url


function createUrl(imgUrl, options = {}) {
  // If radius is -1, we need to pass `max` to the API
  const cornerRadius = options.cornerRadius === -1 ? `max` : options.cornerRadius;

  if (options.toFormat === `auto`) {
    delete options.toFormat;
  } // Convert to Contentful names and filter out undefined/null values.


  const urlArgs = {
    w: options.width || undefined,
    h: options.height || undefined,
    fl: options.toFormat === `jpg` && options.jpegProgressive ? `progressive` : undefined,
    q: options.quality || undefined,
    fm: options.toFormat || undefined,
    fit: options.resizingBehavior || undefined,
    f: options.cropFocus || undefined,
    bg: options.background || undefined,
    r: cornerRadius || undefined
  };
  const isBrowser = typeof window !== `undefined`;
  const searchParams = isBrowser ? new window.URLSearchParams() : new _url.URLSearchParams();

  for (const paramKey in urlArgs) {
    if (typeof urlArgs[paramKey] !== `undefined`) {
      var _urlArgs$paramKey;

      searchParams.append(paramKey, (_urlArgs$paramKey = urlArgs[paramKey]) !== null && _urlArgs$paramKey !== void 0 ? _urlArgs$paramKey : ``);
    }
  }

  return `https:${imgUrl}?${searchParams.toString()}`;
}