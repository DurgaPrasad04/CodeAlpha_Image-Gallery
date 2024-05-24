// Get the modal
var modal = document.getElementById("modal");

// Get the images
var images = document.getElementsByClassName("gallery-image");

// Get the modal image
var modalImg = document.getElementById("modal-image");

// Loop through each image and add a click event listener
for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
}

// Get the close button
var close = document.getElementsByClassName("close")[0];

// When the user clicks on the close button, close the modal
close.onclick = function() {
    modal.style.display = "none";
}
