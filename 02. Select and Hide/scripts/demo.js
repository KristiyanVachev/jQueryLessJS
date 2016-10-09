//Select the element
var wrapper = $('#wrapper');

//Create element with picture and append
var jessicaPicture = $('<img/>');
jessicaPicture.attr('src', 'images/jessica.png');
jessicaPicture.addClass('jessicaHyde');

wrapper.append(jessicaPicture);

//Create a function to hide
var jessica = $('.jessicaHyde');

jessica.on('click', function () {
    $(this).hide();
});