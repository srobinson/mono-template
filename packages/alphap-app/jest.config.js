const base = require("../../jest.config.js")

module.exports = {
  ...base,
  displayName: "@uw/app",
  name: "@uw/app",
  setupTestFrameworkScriptFile: "./../../test-setup.ts",
}
