import exp from "../expected/bug-report-comments";
import sel from "../selectors/bug-report";

class Helpers {

    addNewComments(){
        let addComment = $(sel.addNewComments);
        addComment.addValue('Q'.repeat(5));
        let button = $(sel.buttonAddComments);
        button.click();
    }

}

export default new Helpers();
