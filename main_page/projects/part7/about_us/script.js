 // Get the elements
 const hamburgerMenu = document.getElementById('hamburger-menu');
 const navContainer = document.getElementById('main-nav-container');

 // Toggle the menu when the hamburger icon is clicked
 hamburgerMenu.onclick = () => {
     navContainer.classList.toggle('show');
 };