#Events

Events are functions that are being executed when something happens. Something like a click, mouse over, key pressed, etc.

Events are **attached** on elements.

##Creating an event
```js
var button = $("button");
button.on("click", functionName);
```


```js
function functionName() {
    //code to be executed when the function is called
}
```

## **this** keyword
When you call a function from an event you have access to the **this** keyword.
**this** is the element from which the function is called.

```html
    <img id="image"  src="pic.png" />
```

```js
    var image = $("image");
    image.on("click", displaySrc);
    
    function displaySrc(){
        console.log(this); // <img id="image"  src="pic.png" />
        console.log(this.src); //"pic.png" 
    }
```


    