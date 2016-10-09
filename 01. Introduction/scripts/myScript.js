//Select the element
//INTRODUCE VARIABLES
var koala = $('.koala');

//append a function on click
koala.on('click', Poop);

// koala.remove();

koala.click(Poop);

//Function to be called
//INTRODUCE FUNCTIONS
function Poop() {
    //Creating an element
    var newPoop = $('<div>"Poop"</div>');

    //Edit the content of the element
    newPoop.html("Poop!");

    //Add it to the selected element
    $(this).append(newPoop);
}

