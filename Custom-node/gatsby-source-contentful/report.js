"use strict";

exports.__esModule = true;
exports.ERROR_MAP = exports.CODES = void 0;
// @ts-check
const CODES = {
  /* Fetch errors */
  LocalesMissing: `111001`,
  SelfSignedCertificate: `111002`,
  SyncError: `111003`,
  FetchContentTypes: `111004`,
  GatsbyPluginMissing: `111005`,
  ContentTypesMissing: `111006`
};
exports.CODES = CODES;
const ERROR_MAP = {
  [CODES.LocalesMissing]: {
    text: context => context.sourceMessage,
    level: `ERROR`,
    category: `USER`
  },
  [CODES.ContentTypesMissing]: {
    text: context => context.sourceMessage,
    level: `ERROR`,
    category: `USER`
  },
  [CODES.SelfSignedCertificate]: {
    text: context => context.sourceMessage,
    level: `ERROR`,
    category: `USER`
  },
  [CODES.SyncError]: {
    text: context => context.sourceMessage,
    level: `ERROR`,
    category: `THIRD_PARTY`
  },
  [CODES.FetchContentTypes]: {
    text: context => context.sourceMessage,
    level: `ERROR`,
    category: `THIRD_PARTY`
  },
  [CODES.FetchTags]: {
    text: context => context.sourceMessage,
    level: `ERROR`,
    category: `THIRD_PARTY`
  },
  [CODES.FetchTags]: {
    text: context => context.sourceMessage,
    level: `ERROR`,
    category: `THIRD_PARTY`
  },
  [CODES.GatsbyPluginMissing]: {
    text: context => context.sourceMessage,
    level: `ERROR`,
    category: `USER`
  }
};
exports.ERROR_MAP = ERROR_MAP;