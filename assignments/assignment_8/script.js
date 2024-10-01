const imageArray = [
    {
        src: 'images/birthday.jpg',
        title: 'Birthday Party',
        description: 'This character is celebrating with a birthday hat!'
    },
    {
        src: 'images/clown.jpg',
        title: 'Clown',
        description: 'This character is dressed up as a funny clown.'
    },
    {
        src: 'images/rain.jpg',
        title: 'Rain',
        description: 'This character is staying dry under the umbrella!'
    },
    {
        src: 'images/read.jpg',
        title: 'Reading Time',
        description: 'This character is catching up on some reading.'
    },
    {
        src: 'images/shovel.jpg',
        title: 'Gardening Time',
        description: 'This character is ready to work in the garden.'
    },
    {
        src: 'images/work.jpg',
        title: 'Work',
        description: 'This character is working hard with a laptop.'
    }
];

function loadImages() {
    const imageContainer = document.getElementById('images');
    
    if (imageContainer) {
        console.log('Image container found');
        
        for (let i = 0; i < imageArray.length; i++) {
            const imageData = imageArray[i];
            console.log('Loading image:', imageData.src); 
            
          
            const imgDiv = document.createElement('div');
            imgDiv.classList.add('image-container');
    
        
            const img = document.createElement('img');
            img.src = imageData.src;
            img.alt = imageData.title;
    
        
            img.onclick =  () => {
                document.getElementById('image-title').innerText = imageData.title;
                document.getElementById('image-description').innerText = imageData.description;
            };
    
            imgDiv.appendChild(img);
            imageContainer.appendChild(imgDiv);
        }
    } else {
        console.error('Image container not found!');
    }
}

window.onload = loadImages;
