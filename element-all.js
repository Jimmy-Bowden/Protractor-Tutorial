describe("Protractor Element Demo", function() {
  var finalNumbers = [];
  function Add(a, b) {
    element(by.model("first")).sendKeys(a);
    element(by.model("second")).sendKeys(b);

    element(by.id("gobutton")).click();
    element(by.css("h2"))
      .getText()
      .then(function(text) {
        finalNumbers.unshift(text);
      });
  }

  it("Locators", function() {
    /*browser.waitForAngularEnabled(false);
browser.get("http://google.com");//non angular apps*/
    browser.get("http://juliemr.github.io/protractor-demo/");

    Add(2, 3);
    Add(4, 3);
    Add(8, 3);
    Add(2, 3);
    Add(9, 3);
    Add(0, 3);

    var i = 0;

    element.all(by.repeater("result in memory")).each(function(item) {
      item
        .element(by.css("td:nth-child(3)"))
        .getText()
        .then(function(text) {
          console.log(text);
          expect(text).toEqual(finalNumbers[i]);
          i++;
        });
    });
  });
});
