//1. Create a new div with text of your choosing and append it to the wrapper
var newDiv = $("<div>");
newDiv.html("<h1>Content</h1>");

$("#wrapper").append(newDiv);

//2. Colour the text

newDiv.css("color", "green");

//3. Create and append an append it to the div you created

var img = $("<img />");
img.attr("src", "koala.png");
newDiv.append(img);

//4. Create and add a CSS file containing custom styling for a class to the index.
//  Then add the class to the div you created.

newDiv.addClass("newDiv");