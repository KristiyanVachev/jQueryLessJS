var koala = $('#wrapper');

koala.next();

// //(Повтаря се 5 пъти)
// {
//     currentElement.stani cherno;
//
//     currentElement = currentElement.next();
// }

var currentElement = $('#poop1');
for (let i = 0; i < 5; i+= 1) {
    currentElement.addClass("koala");

    currentElement = currentElement.next();
}
