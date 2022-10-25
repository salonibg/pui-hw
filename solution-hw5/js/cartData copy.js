//dictionary of price adaptions associated with visible options
let glazingAdditions = {
    'Keep original': {addition: 0.0},
    'Sugar milk': {addition: 0.0},
    'Vanilla milk': {addition: 0.5},
    'Double chocolate': {addition: 1.5}
};

let packOptions = {
    1: {addition: 1},
    3: {addition: 3},
    6: {addition: 5},
    12: {addition: 10}
};

//dictionary of cart items
const cartItems = [
    {name: "Original", glazing: "Sugar milk", packSize: 1},
    {name: "Walnut", glazing: "Vanilla milk", packSize: 12},
    {name: "Raisin", glazing: "Sugar milk", packSize: 3},
    {name: "Apple", glazing: "Keep original", packSize: 3}
];

//create Roll class
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

//create and populate cart 
var cart = [];
var totalPrice = 0.0;

function populateCart() {
    for (let i = 0; i < cartItems.length; i++) {
        const item = new Roll();
        item.type = cartItems[i].name;
        item.glazing = cartItems[i].glazing;
        item.size = cartItems[i].packSize;
        item.basePrice = rolls[cartItems[i].name].basePrice
        cart.push(item);
    }
};

populateCart();

//create and populate display
function showRolls(rollItem) {
    const rollName = rollItem.type;
    const rollGlaze = rollItem.glazing;
    const rollPack = rollItem.size;

    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);

    const coverPic = clon.querySelector('#cartImg');
    const picPath = rolls[rollName].imageFile;
    coverPic.src = './assets/' + picPath;

    const itemDescript = clon.querySelector('#cartItemDescript');
    itemDescript.innerText = rollName + " Cinnamon Roll\nGlazing: " + rollGlaze + "\nPack Size: " + rollPack;

    const itemPrice = clon.querySelector('#cartItemPrice');
    var newPrice = (rollItem.basePrice + glazingAdditions[rollGlaze].addition) * packOptions[rollPack].addition;
    itemPrice.innerText = "$" + (newPrice.toFixed(2)).toString();
    totalPrice += newPrice;

    document.body.appendChild(clon);
};



function displayRolls(rollItem, index) {
    const rollName = rollItem.type;
    const rollGlaze = rollItem.glazing;
    const rollPack = rollItem.size;

    const coverPic = document.querySelector('#cartImg' + index.toString());
    const picPath = rolls[rollName].imageFile;
    coverPic.src = './assets/' + picPath;

    const itemDescript = document.querySelector('#cartItemDescript' + index.toString());
    itemDescript.innerText = rollName + " Cinnamon Roll\nGlazing: " + rollGlaze + "\nPack Size: " + rollPack;

    const itemPrice = document.querySelector('#cartItemPrice' + index.toString());
    var newPrice = (rollItem.basePrice + glazingAdditions[rollGlaze].addition) * packOptions[rollPack].addition;
    itemPrice.innerText = "$" + (newPrice.toFixed(2)).toString();
    totalPrice += newPrice;
};

function populateCartDisplay() {
    for (let i = 0; i < cart.length; i++) {
        showRolls(cart[i]);
        //displayRolls(cart[i], i);
    }

    const totalCartPrice = document.querySelector('#cartTotalPrice');
    totalCartPrice.innerText =  "$" + (totalPrice.toFixed(2)).toString();
};


populateCartDisplay();


function removeFromCart(element) {
    const id = element.id;
    const index = id.charAt(10);
    cart.splice(index, 1);
    
    console.log(cart);
    console.log(totalPrice);

    let price = document.querySelector('#cartItemPrice' + index.toString());
    totalPrice -= price;

    console.log(cart);
    console.log(totalPrice);

    populateCartDisplay();
};

//remove button functionality
//let removeItem = document.querySelector('#remove-btn');
//removeItem.addEventListener('click', event => {removeFromCart(removeItem)});

