 // Get the elements
 const hamburgerMenu = document.getElementById('hamburger-menu');
 const navContainer = document.getElementById('main-nav-container');

 // Toggle the menu when the hamburger icon is clicked
 hamburgerMenu.onclick = () => {
     navContainer.classList.toggle('show');
 };


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex - 1].classList.add("fade-in");
  setTimeout(showSlides, 3000);
}