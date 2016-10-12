//1. Select the button
var button = $("button");


//3. Attach the event to the target
button.on("click", addNewPoop);


//2. Create the action you want to happen when clicked
function addNewPoop() {
    var newElement = $("<p />");
    newElement.text("Poop");

    $("#wrapper").append(newElement);
}