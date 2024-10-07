class Bird {
    constructor(title, size, lifespan, food, habitat, fact, image) {
        this.title = title;
        this.size = size;
        this.lifespan = lifespan;
        this.food = food;
        this.habitat = habitat;
        this.fact = fact;
        this.image = image;
    }

    get section() {
        const section = document.createElement("section");
        section.classList.add("bird");

        // Create a header with the title
        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        section.append(h3);

        // Create an image element and append
        const img = document.createElement("img");
        img.src = `images/${this.image}`;
        section.append(img);

        // Add event listener to open modal
        section.addEventListener("click", () => {
            this.showModal();
        });

        return section;
    }

    get expandedSection() {
        const div = document.createElement("div");
        div.innerHTML = `
            <h3>${this.title}</h3>
            <img src="images/${this.image}" class="modal-image">
            <p><strong>Size:</strong> ${this.size}</p>
            <p><strong>Lifespan:</strong> ${this.lifespan}</p>
            <p><strong>Food:</strong> ${this.food}</p>
            <p><strong>Habitat:</strong> ${this.habitat}</p>
            <p><strong>Interesting Fact:</strong> ${this.fact}</p>
        `;
        return div;
    }

    showModal() {
        const modal = document.getElementById("birdModal");
        const modalInfo = document.getElementById("modal-info");
        const modalTitle = document.getElementById("modal-title");

        modalTitle.innerText = this.title;
        modalInfo.innerHTML = '';
        modalInfo.append(this.expandedSection);

        modal.style.display = "block";
    }
}

const birds = [
    new Bird("Hummingbird", "2.5 inches", "3-5 years", "Nectar (Sugar water)", "Trees", "They're nicknamed 'Hummers'", "hummingbird.jpg"),
    new Bird("Blue Jay", "9-12 inches", "7 years", "Nuts and seeds", "Forests", "Known for their intelligence and complex social systems", "bluejay.webp"),
    new Bird("Cardinal", "8-9 inches", "3 years", "Seeds, insects, and berries", "Woodland edges", "Both males and females sing year-round", "cardinal.webp"),
    new Bird("Robin", "9-11 inches", "2 years", "Insects, fruits, and berries", "Backyards and gardens", "Known for their beautiful singing", "robin.webp")
];

birds.forEach(bird => {
    document.getElementById("bird-list").append(bird.section);
});

// Modal close functionality
const modal = document.getElementById("birdModal");
const closeBtn = document.querySelector(".close");

closeBtn.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};