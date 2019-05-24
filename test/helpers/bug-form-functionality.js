const stringLength = 5;
const characters = "123456789";
const testName = "Test";

class HelpersBugForm {

  generateRandomString(length, chars) {
    let string = '';
    for ( let i = 0 ; i < length ; i++ )
        string += chars[Math.floor(Math.random() * chars.length)];
    return string;
  }

  fillFieldsAndDropDownsInBugForm(fields, dropDowns) {
    let randomString = this.generateRandomString(stringLength, characters);
    let fieldTags = fields.map(str => $(str));
    for(let fieldTag of fieldTags) {
      fieldTag.setValue(testName + randomString);
    };
    let dropDownTags = dropDowns.map(str => $(str));
    for(let dropDownTag of dropDownTags) {
      dropDownTag.click();
      let div = dropDownTag.$('div.Dropdown-menu');
      let divs = div.$$('div');
      divs[0].click();
    };
  }
  
  generateRandomStringWithBreak(length, chars) {
    return this.generateRandomString(length, chars) + "/r/n";
  } 
}

export default new HelpersBugForm()