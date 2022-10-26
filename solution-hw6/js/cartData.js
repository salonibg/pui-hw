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

//create totalPrice variable
var cart = [];
var totalPrice = 0.0;

//retrieve cart from local storage if cart exists
if (localStorage.getItem('storedCart') != "null") {
    retrieveFromLocalStorage();
    for (const item of cart) {
        showRolls(item);
    }
} else {
    var cart = [];
}

//retrieve cart from local storage
function retrieveFromLocalStorage() {
    const cartArrayString = localStorage.getItem('storedCart');
    const cartArray = JSON.parse(cartArrayString);
    cart = cartArray;
}


//create display according to template
function showRolls(rollItem) {
    var temp = document.querySelector("#rolls-template");
    var clon = temp.content.cloneNode(true);
    rollItem.element = clon.querySelector('.summary-text');

    const btnDelete = rollItem.element.querySelector('.remove-btn');
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

//update total price when an item is removed
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

//remove button functionality
function removeFromCart(rollItem) {
    console.log(rollItem);
    updatePrice(rollItem);
    rollItem.element.remove();

    const index = cart.indexOf(rollItem);
    cart.splice(index, 1);
    
    saveToLocalStorage(cart);
};

//save cart to local storage
function saveToLocalStorage(cart) {
    const cartArrayString = JSON.stringify(cart);
    localStorage.setItem('storedCart', cartArrayString);

    console.log(cartArrayString);
}









