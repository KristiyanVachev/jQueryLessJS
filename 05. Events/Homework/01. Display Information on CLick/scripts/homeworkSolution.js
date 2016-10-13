//Get the data from the boxes and place them in a prettier way.
//Color it suitably according to gender. (If-else)
//It's better if you write as much of the styles in a separate css file.


//Select the button and attach an event on button click
var button = $("#submitButton");
button.on("click", createNewForm);


function createNewForm() {
    //Creating a new div element in which to put the information.
    var newProfile = $("<div />");

    //Name
    var name = $("#name").val();
    newProfile.append("<h1>" + name + "</h1>");

    //Occupation
    var occupation = $("#occupation").val();
    newProfile.append("<h2>" + occupation + "</h2>");

    //Description
    var description = $("#description").val();
    newProfile.append("<p>" + description + "</p>");

    //Coloring the text according to gender
    var selectedGender = $("#genderDropdown").val();
    if (selectedGender == "Male") {
        console.log("blue");
        newProfile.css("color", "blue");
    }
    else {
        console.log("pink");
        newProfile.css("color", "pink");
    }

    //Appending the whole thing to the HTML.
    $("#wrapper").append(newProfile);

}

//Tip
//If you're having trouble getting the value of the dropdown, you could search
// "jquery check which dropdown value is checked" and open
// http://stackoverflow.com/questions/2780566/get-selected-value-of-a-dropdowns-item-using-jquery