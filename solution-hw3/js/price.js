//dictionary of price adaptions associated with visible options
let glazingAdditions = [ 
    {choice: 'Keep original', addition: 0.0},
    {choice: 'Sugar milk', addition: 0.0},
    {choice: 'Vanilla milk', addition: 0.5},
    {choice: 'Double chocoloate', addition: 1.5}
];

let packOptions = [
    {size: '1', addition: 1},
    {size: '3', addition: 3},
    {size: '6', addition: 5},
    {size: '12', addition: 10}
];

var newPrice = 2.49;

//populate glaze dropdown
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


function glazingChange(element) {
    // get value of selected glazing option
    const priceChange = element.value;
    
  // add your code to do update the price ...
    newPrice = 2.49 + glazingAdditions[priceChange].addition;
    
}

function packChange(element) {
    const priceChange = element.value;
    newPrice = newPrice * packOptions[priceChange].addition;
}

let customPrice = document.querySelector('#custom-price');

function onSelectValueChange() {
    glazingChange(selectGlaze);
    packChange(selectPack);
    customPrice.innerText = newPrice.toFixed(2);
}


//when selected element changes, the display changes
selectGlaze.addEventListener('change', onSelectValueChange);
selectPack.addEventListener('change', onSelectValueChange);

customPrice.innerText = newPrice;


