describe("Protractor baby steps", function() {
  it("Open Angular js website", function() {
    browser.get("https://www.protractortest.org/");
    browser.get("http://juliemr.github.io/protractor-demo/");
    browser.sleep(5000);
    console.log("End of it");
  });

  //Each it block will be called as a spec

  it("close browswer", function() {
    // code to close browser
  });
});
