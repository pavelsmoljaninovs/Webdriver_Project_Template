test();

function test() {
    location.href = 'https://reactbugtracker.com/';
    $(sel.header).waitForDisplayed(2000);
    let array = $$('div');
    console.log(array);
}
