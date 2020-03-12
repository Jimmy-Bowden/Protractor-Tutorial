describe("Protractor baby steps", function() {
  it("Enter 3 + 5", function() {
    const firstInput = element(by.model("first"));
    const secondInput = element(by.model("second"));
    const goButton = element(by.id("gobutton"));
    const resultHeader = element(by.css("h2"));

    browser.get("https://www.protractortest.org/");
    browser.get("http://juliemr.github.io/protractor-demo/");

    firstInput.sendKeys("3");
    secondInput.sendKeys("8");
    goButton.click();

    expect(resultHeader.getText()).toEqual("11");
  });
});
