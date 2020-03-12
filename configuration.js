exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",

  specs: ["spec1.js", "chain-locators.js", "element-all.js"],
  capabilities: {
    browserName: "chrome"
  }
};
