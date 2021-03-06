"use strict";

exports.parse = function(code, options) {
  return exports.parseForESLint(code, options).ast;
};

exports.parseForESLint = function(code, options) {
  options = options || {};
  options.ecmaVersion = options.ecmaVersion || 2018;
  options.sourceType = options.sourceType || "module";
  options.allowImportExportEverywhere =
    options.allowImportExportEverywhere || false;

  if (options.eslintVisitorKeys && options.eslintScopeManager) {
    return require("./parse-with-scope")(code, options);
  }
  return { ast: require("./parse-with-patch")(code, options) };
};

exports.parseNoPatch = function(code, options) {
  return require("./parse")(code, options);
};
