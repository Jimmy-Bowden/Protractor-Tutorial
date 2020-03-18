describe("Actions demo", function() {
  var EC = protractor.ExpectedConditions;

  var openNewTabButton = element(by.id("opentab"));
  var alertButton = element(by.id("alertbtn"));

  var alertInput = element(by.id("name"));

  it("Open Posse website", function() {
    browser.waitForAngularEnabled(false);
    browser.get("https://rahulshettyacademy.com/AutomationPractice/");

    alertInput.sendKeys("Jimmy");
    alertButton.click();

    browser.sleep(2000);
    // expect(EC.alertIsPresent()).toEqual(true);
    EC.alertIsPresent();

    browser
      .switchTo()
      .alert()
      .accept();

    browser.sleep(2000);
  });
});
