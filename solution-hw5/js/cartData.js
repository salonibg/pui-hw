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

        this.element = null;
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
    var temp = document.querySelector("#rolls-template");
    var clon = temp.content.cloneNode(true);
    rollItem.element = clon.querySelector('.summary-text');

    const btnDelete = rollItem.element.querySelector('.remove-btn');
    console.log(btnDelete);
    btnDelete.addEventListener('click', () => {
        removeFromCart(rollItem);
    });

    const rollsListElement = document.querySelector('#rolls-list');
    rollsListElement.prepend(rollItem.element);

    updateDisplay(rollItem);
};

function updateDisplay(rollItem) {

    const rollName = rollItem.type;
    const rollGlaze = rollItem.glazing;
    const rollPack = rollItem.size;

    const coverPic = rollItem.element.querySelector('#cartImg');
    const picPath = rolls[rollName].imageFile;
    coverPic.src = './assets/' + picPath;

    const itemDescript = rollItem.element.querySelector('#cartItemDescript');
    itemDescript.innerText = rollName + " Cinnamon Roll\nGlazing: " + rollGlaze + "\nPack Size: " + rollPack;

    const itemPrice = rollItem.element.querySelector('#cartItemPrice');
    var newPrice = (rollItem.basePrice + glazingAdditions[rollGlaze].addition) * packOptions[rollPack].addition;
    itemPrice.innerText = "$" + (newPrice.toFixed(2)).toString();
    totalPrice += newPrice;

    const totalCartPrice = document.querySelector('#cartTotalPrice');
    totalCartPrice.innerText =  "$" + (totalPrice.toFixed(2)).toString();
};

function updatePrice(rollItem) {
    const totalCartPrice = document.querySelector('#cartTotalPrice');
    if (cart.length == 0) {
        totalCartPrice.innerText =  "$0.00"
    } else {
        var priceDeduction = (rollItem.basePrice + glazingAdditions[rollItem.glazing].addition) * packOptions[rollItem.size].addition;
        totalPrice -= priceDeduction;
        totalCartPrice.innerText =  "$" + (totalPrice.toFixed(2)).toString();
    };
};

function removeFromCart(rollItem) {
    updatePrice(rollItem);
    rollItem.element.remove();
    cart.delete(rollItem);
};

for (let i = 0; i < cart.length; i++) {
    showRolls(cart[i]);
}









