let baseUrl = browser.options.baseUrl;

export default class BasePage {

  open () {
    browser.url(baseUrl)
  }

  getPageTitle () {
    browser.getTitle();
  }

}