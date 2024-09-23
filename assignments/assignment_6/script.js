// Show Color Slider 
document.querySelector("#show-color-slider").onclick = function (event) {
    document.getElementById("color-slider-section").classList.remove("hidden");
    document.getElementById("picture-chooser-section").classList.add("hidden");
};

 // Hide Color slider
document.querySelector("#show-picture-chooser").onclick = function (event) {
    document.getElementById("picture-chooser-section").classList.remove("hidden");
    document.getElementById("color-slider-section").classList.add("hidden");
};

// Color Slider 
document.querySelector("#red-slider").oninput = function () {
    const value = document.getElementById("red-slider").value;
    const colorSection = document.getElementById("color-slider-section");
    const colorMessage = document.getElementById("color-message");

    colorSection.style.backgroundColor = `rgb(${value}, 0, 0)`;
    if (value < 85) {
        colorMessage.textContent = "Cool";
    } else if (value < 170) {
        colorMessage.textContent = "Chill";
    } else {
        colorMessage.textContent = "Hot";
    }
};

// Picture size
document.querySelectorAll("#small-picture-btn, #medium-picture-btn, #large-picture-btn").forEach(button => {
    button.onclick = function () {
        let imageSize;
        const imageDisplay = document.getElementById("image-display");

        if (this.id === "small-picture-btn") {
            imageSize = 200; 
        } else if (this.id === "medium-picture-btn") {
            imageSize = 300; 
        } else if (this.id === "large-picture-btn") {
            imageSize = 400; 
        }
        imageDisplay.innerHTML = `<img src="https://picsum.photos/${imageSize}" alt="Random Image">`;
    };
});

// menu on small screens
document.getElementById("menu-toggle").onclick = function () {
    const navItems = document.getElementById("nav-items");
    const menuArrow = document.getElementById("menu-arrow");
    if (navItems.style.display === "flex" || navItems.style.display === "") {
        navItems.style.display = "none";
        menuArrow.innerHTML = "&#9660;"; 
    } else {
        navItems.style.display = "flex";
        menuArrow.innerHTML = "&#9650;"; 
    }
};


