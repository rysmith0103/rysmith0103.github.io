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
    ul.append(getLi(iceCream.image));
    
}
const getLi = data => {
    const li = document.createElement("li");
    const img = document.createElement('img');
    img.src = config.baseUrl + data;
    li.appendChild(img);
    return li;
}
window.onload = () => showIceCream();