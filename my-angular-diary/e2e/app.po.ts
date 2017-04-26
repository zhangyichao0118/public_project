import { browser, element, by } from 'protractor';

export class MyAngularDiaryPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
