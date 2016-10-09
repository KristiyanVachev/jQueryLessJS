//Creating an element
var newElement = $("<p />");

//Adding text in the element.
newElement.html("Html text");

//Adding a css style to the element
newElement.css("color", "brown");

//Adding and removing a class
newElement.addClass("className");
newElement.removeClass("className");

//Appending the newly created element to another element.
$("#wrapper").append(newElement);