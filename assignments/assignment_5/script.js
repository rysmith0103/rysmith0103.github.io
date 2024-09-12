window.onload = () => {
    document.getElementById("refresh-button").onclick = refresh;
    document.getElementById("counter-button").onclick = counterColumn;
    document.getElementById("range").oninput = sliderColumn;
};


const refresh = () => {
    location.reload();
}
let count = 0;
const counterColumn = () => {
    count++
    document.getElementById("count-value").innerText = count
}

const sliderColumn = function () {
    let newPosition = this.value;
    const slidingBox = document.getElementById("sliding-box");
    slidingBox.style.left = newPosition + 'px';
}