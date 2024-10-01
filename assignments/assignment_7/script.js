
//error message
document.getElementById('draw-button').addEventListener('click', () => {
    const input = document.getElementById('star-input').value;
    const numStars = parseInt(input);
    const errorMessage = document.getElementById('error-message');
    const starMessage = document.getElementById('star-message');

    if (isNaN(numStars) || numStars <= 0) {
        errorMessage.textContent = 'Please enter a valid number of stars.';
        errorMessage.style.display = 'block';
        document.getElementById('star-area').innerHTML = '';
        starMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'none';
        drawStars(numStars);
    }
});

// loop for drawing the stars
const drawStars = (numStars) => {
    const starArea = document.getElementById('star-area');
    starArea.innerHTML = '';  // Clear stars

    const areaWidth = starArea.clientWidth;
    const areaHeight = starArea.clientHeight;

    console.log(`Star area dimensions: width=${areaWidth}, height=${areaHeight}`);

    for (let i = 1; i <= numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.textContent = "*"; 

        // Random position
        const x = Math.random() * (areaWidth - 12.5); 
        const y = Math.random() * (areaHeight - 12.5);

        // add the positions
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;

        console.log(`Star ${i} position: x=${x}, y=${y}`);

        starArea.appendChild(star);
        star.onclick = () => {
            alert('Star number :' + i)
        }
    }
};
