//dictionary of price adaptions associated with visible options
let glazingAdditions = [ 
    {choice: 'Keep original', addition: 0.0},
    {choice: 'Sugar milk', addition: 0.0},
    {choice: 'Vanilla milk', addition: 0.5},
    {choice: 'Double chocolate', addition: 1.5}
];

let packOptions = [
    {size: '1', addition: 1},
    {size: '3', addition: 3},
    {size: '6', addition: 5},
    {size: '12', addition: 10}
];


//parse url parameter
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
console.log(params);

//extract roll information
const rollType = params.get('roll')
//console.log(rollType);

const imagePath = rolls[rollType].imageFile;
//console.log(imagePath);

const price = rolls[rollType].basePrice;
//console.log(price)

//populate glaze dropdown
var newPrice = price;
let selectGlaze = document.querySelector('#glazingOptions');

for (var i = 0; i < glazingAdditions.length; i++) {
    var elem = glazingAdditions[i];
    var option = document.createElement('option');
    option.text = elem.choice;
    option.value = i;
    selectGlaze.add(option);
}

//populate pack dropdown
let selectPack = document.querySelector('#packingOptions');

for (var i = 0; i < packOptions.length; i++) {
    var element = packOptions[i];
    var option = document.createElement('option');
    option.text = element.size;
    option.value = i;
    selectPack.add(option);
}


//update total price according to glaze option
function glazingChange(element) {
    const priceChange = element.value;
    //console.log(priceChange);
    newPrice = price + glazingAdditions[priceChange].addition;
}

//update total price according to pack option
function packingChange(element) {
    const priceChange = element.value;
    newPrice = newPrice * packOptions[priceChange].addition;
}


//update displayed price based on user selection
let customPrice = document.querySelector('#custom-price');

function onSelectValueChange() {
    glazingChange(selectGlaze);
    packingChange(selectPack);
    customPrice.innerText = "$" + (newPrice.toFixed(2)).toString();
}



//when selected element changes, the display changes
selectGlaze.addEventListener('change', onSelectValueChange);
selectPack.addEventListener('change', onSelectValueChange);

customPrice.innerText = "$" + newPrice.toString();


//update DOM elements
const headerElement = document.querySelector('#main-title');
headerElement.innerText = rollType + ' Cinnamon Roll';

const coverImage = document.querySelector('#product');
coverImage.src = './assets/' + imagePath;

const initialPrice = document.querySelector('#custom-price');
initialPrice.innerText = '$' + price.toString();

//create cart
var cart = [];

//create Roll class
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

//add current roll details to cart when button is pressed
function addToCart() {
    const currentRoll = new Roll();
    currentRoll.type = rollType;
    currentRoll.glazing = selectGlaze.options[selectGlaze.selectedIndex].text;
    currentRoll.size = selectPack.options[selectPack.selectedIndex].text;
    currentRoll.basePrice = newPrice;

    cart.push(currentRoll);
    console.log(cart);
}

let buttonPress = document.querySelector('#cart-btn');
buttonPress.addEventListener('click', event => {addToCart();});




