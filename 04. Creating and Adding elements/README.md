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

- .html()
```js
newElement.html("<p>Text<p/>");
```
Rewrites the content of the selected element.

- .text()
```js
newElement.text("text");
```
Rewrites the content of the selected element, escaping the tags.

- .css("property", "value")
```js
newElement.css("color", "green");
```
Sets the value of the CSS property to the element.

- .attr("attribute", "value";
```js
var newImg = $("<img />");
newElement.attr("src", "picture.png");
```
Sets the value of the attribute to the element.
Works only if the selected element normally has the attribute you are trying to add.

##Adding and removing a class.
```js
newElement.addClass("className");
newElement.removeClass("className");
```
- Useful if you have a predefined style for the selected element.