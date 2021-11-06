console.log('JavaScript works!');

$(document).ready(readyNow);

function readyNow(){
    console.log('jQuery works!');
    $('#submitButton').on('click', handleSubmitButton)
}

function handleSubmitButton(){
    console.log('submit button works!');
}
