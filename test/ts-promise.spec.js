const adapter = require("../dist/index.js").default;
describe("Promises/A+ Tests", function() {
  console.info("adapter:", adapter);
  require("promises-aplus-tests").mocha(adapter);
});
