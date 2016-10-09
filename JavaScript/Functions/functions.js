/**
    Used to separate and reuse code.
    Also, easier to understand the code.
 */

//Declaration
function doSomething() {
    console.log('Something');
}

//Call of the function
doSomething();


//Can pass parameters and return a value
function canKoalaEat(food) {
    if(food === 'eucalyptus'){
        return "Koala is fed";
    }
    else{
        return "Koala can't eat this " + food + ".";
    }
}

var result = canKoalaEat('Poop');
console.log(result);