$("#imagePreview img").on("click", displayImage);

function displayImage() {
    var newImg = $("<img />");
    newImg.attr("src", this.src);

    $("#imageBox").html(newImg);
}