/**
    Used to separate and reuse code.
    Also, easier to understand the if it has a proper name.
 */

//Declaration
function doSomething() {
    console.log('Something');
}

//Call of the function
doSomething();

//Can pass parameters and return a value
var result = canKoalaEat('Bamboo');

function canKoalaEat(food) {
    if(food === 'eucalyptus'){
        return "Koala is fed";
    }
    else{
        return "Koala can't eat this " + food + ".";
    }
}

console.log(result);