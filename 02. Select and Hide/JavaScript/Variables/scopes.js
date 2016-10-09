//Difference between var and let. Scopes.

var dolphin = 'Im everywhere';

function ocean() {
    let shark = "I'm here";
}

function jungle() {
    let koala = 'I newElement.';

    console.log(koala); //Koala is here.
    console.log(dolphin); //Dolphin is everywhere.
    console.log(shark); //Shark is not in the jungle.
}