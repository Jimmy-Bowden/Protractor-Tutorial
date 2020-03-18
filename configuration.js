exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",

  specs: ["multi-window.js"],
  capabilities: {
    browserName: "chrome"
  }
};
