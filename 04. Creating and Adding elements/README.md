#Creating and adding elements

You can create new HTML elements dynamically using jQuery.

## Creating and adding it to the HTML document

Creating the element.
```js
var newElement = $("<div />");
```

Adding it to the HTML document.
```js
$("#wrapper").append(newElement);
```


## Adding content, styles and attributes

Adding more HTML into the selected element.
```js
newElement.html("<p>Text<p/>);
```

Adding only text to the selected element.
```js
newElement.text("text");
```

Adding CSS
```js
newElement.css("color", "green");
```

Adding attributes
```js
var newImg = $("<img />");
newElement.attr("src", "picture.png");
```
- Works only if the selected element normally has the attribute you are trying to add.

##Adding and removing a class.
```js
newElement.addClass("className");
newElement.removeClass("className");
```
- Useful if you have a predefined style for the selected element.