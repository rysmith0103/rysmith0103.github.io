const getIceCream = async () => {
    const url = "https://portiaportia.github.io/json/ice-creams.json"

    try{
        const response = await fetch(url);
        return await response.json();
    }
    catch (error) {
        console.log(error);
    }
};
const showIceCream = async () => {
    let iceCream = await getIceCream();
    iceCream.forEach((iceCream) => {
        getIceCreamItem(iceCream);
    });
}
const config = {
    baseUrl: 'https://portiaportia.github.io/json/images/ice-creams/'
  };
const getIceCreamItem = (iceCream) => {
    let ul = document.getElementById("eachIceCream");
    ul.append(getLi({ image: iceCream.image, name: iceCream.name }));
}
const getLi = ({ image, name }) => {
    const li = document.createElement("li");
    const img = document.createElement('img');
    img.src = config.baseUrl + image;
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    const text = document.createElement('span');
    text.className = 'ice-cream-name';
    text.innerText = name;
    overlay.append(text);

    // Append the image and overlay to the list item
    li.append(img);
    li.append(overlay);

    return li;
};
window.onload = () => showIceCream();