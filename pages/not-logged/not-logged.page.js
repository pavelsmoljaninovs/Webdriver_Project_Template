import BasePage from '../base.page';

export default class NotLoggedPage extends BasePage {

  elementVisible (selector) {
    $(element).isDisplayed();
  }

}