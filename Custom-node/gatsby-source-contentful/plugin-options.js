"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.maskText = exports.formatPluginOptionsForCLI = exports.defaultOptions = exports.createPluginConfig = void 0;

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _chalk = _interopRequireDefault(require("chalk"));

// @ts-check
const DEFAULT_PAGE_LIMIT = 1000;
const defaultOptions = {
  host: `cdn.contentful.com`,
  environment: `master`,
  downloadLocal: false,
  localeFilter: () => true,
  contentTypeFilter: () => true,
  pageLimit: DEFAULT_PAGE_LIMIT,
  useNameForId: true,
  enableTags: false
};
exports.defaultOptions = defaultOptions;

const createPluginConfig = pluginOptions => {
  const conf = { ...defaultOptions,
    ...pluginOptions
  };
  return {
    get: key => conf[key],
    getOriginalPluginOptions: () => pluginOptions
  };
};

exports.createPluginConfig = createPluginConfig;
const maskedFields = [`accessToken`, `spaceId`];

const formatPluginOptionsForCLI = (pluginOptions, errors = {}) => {
  const optionKeys = new Set(Object.keys(pluginOptions).concat(Object.keys(defaultOptions)).concat(Object.keys(errors)));

  const getDisplayValue = key => {
    const formatValue = value => {
      if ((0, _isFunction2.default)(value)) {
        return `[Function]`;
      } else if (maskedFields.includes(key) && typeof value === `string`) {
        return JSON.stringify(maskText(value));
      }

      return JSON.stringify(value);
    };

    if (typeof pluginOptions[key] !== `undefined`) {
      return _chalk.default.green(formatValue(pluginOptions[key]));
    } else if (typeof defaultOptions[key] !== `undefined`) {
      return _chalk.default.dim(formatValue(defaultOptions[key]));
    }

    return _chalk.default.dim(`undefined`);
  };

  const lines = [];
  optionKeys.forEach(key => {
    if (key === `plugins`) {
      // skip plugins field automatically added by gatsby
      return;
    }

    lines.push(`${key}${typeof pluginOptions[key] === `undefined` && typeof defaultOptions[key] !== `undefined` ? _chalk.default.dim(` (default value)`) : ``}: ${getDisplayValue(key)}${typeof errors[key] !== `undefined` ? ` - ${_chalk.default.red(errors[key])}` : ``}`);
  });
  return lines.join(`\n`);
};
/**
 * Mask majority of input to not leak any secrets
 * @param {string} input
 * @returns {string} masked text
 */


exports.formatPluginOptionsForCLI = formatPluginOptionsForCLI;

const maskText = input => {
  // show just 25% of string up to 4 characters
  const hiddenCharactersLength = input.length - Math.min(4, Math.floor(input.length * 0.25));
  return `${`*`.repeat(hiddenCharactersLength)}${input.substring(hiddenCharactersLength)}`;
};

exports.maskText = maskText;