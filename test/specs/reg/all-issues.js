import { assert } from "chai";
import help from '../../helpers/helpers';

describe('All Issues', function () {

  it('Control Bar visible', function () {
    help.login();
    //code for visibility verification
    assert.isTrue(help.isVisible('.card-footer', 1));
  });

});