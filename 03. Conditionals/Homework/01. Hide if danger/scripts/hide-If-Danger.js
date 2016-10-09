/**
 It's still season 1. Pietre is bad. If he's here, hide Jessica.

 You cannot edit the given HTML. Select the picture of Jessica and tell her to hide.

 */

function dolphinsHomework() {
    //Write your homework here
    var Pietre = $ ("#pietre");
    var Jessica = $ ("#jessica");
    var text= $ ("#pietreState").val();
    if(text == "Looking")
    {
        Jessica.hide();
    }
    else{
        Jessica.show();

    }

    //Stop here
}













//Koala's magic. Dont touch.
var pietreLooking = true;

function animatePietre() {
    pietreLooking = !pietreLooking;
    if(pietreLooking){
        $("#pietreState").val("Looking");
        $("#pietre").attr("src", "images/pietreLooking.png");
    }
    else{
        $("#pietreState").val("Not looking");
        $("#pietre").attr("src", "images/pietreAway.png");
    }
}

function loop() {

    animatePietre();
    dolphinsHomework();

    setTimeout(loop, 1000);
}

loop();
