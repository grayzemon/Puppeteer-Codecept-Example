const assert = require('assert');

Feature('Sample Feature').timeout(30000);

Scenario('Submit testcafe page', ({ I }) => {
    I.amOnPage('https://devexpress.github.io/testcafe/example/');
    I.see('Example');
    I.fillField('#developer-name','Graham Smith');
    I.dontSeeCheckboxIsChecked('I have tried TestCafe')
    I.click('I have tried TestCafe');
    I.seeCheckboxIsChecked('I have tried TestCafe');
    I.click('MacOS');
    I.fillField('comments','comment text');
    I.selectOption('preferred-interface','JavaScript API');
    I.saveScreenshot('testcafe.png',true);
    I.click('Submit');
    I.waitUrlEquals('https://devexpress.github.io/testcafe/example/thank-you.html')
    I.see('Thank you');
    I.saveScreenshot('testcafe thank you page.png',true);
    
}).tag('@important').tag('@test1');


Scenario('example website test', ({ I }) => {
    I.amOnPage('https://www.example.com');
    I.see('Example');
    I.dontSee('Google');
    I.seeElement('h1');
    I.dontSeeElement('.video-player');
    I.wait(2);
    
});

Scenario('Async assert test', async ({ I }) => {
    I.amOnPage('https://www.example.com');
    I.waitForText('Example Domain');
    const text = await I.grabTextFrom('h1');
    assert.strictEqual(text,'Example Domain', 'Text does not match');
});

