function resizeImages() {
    var images = document.querySelectorAll("img");

    for (var i = 0; i < images.length; i++) {
        images[i].classList.add("resize");
    }
}
