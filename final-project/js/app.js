//TIMELINE
var items = document.querySelectorAll("li");
var featured_items = document.querySelectorAll("#featured");

var current_items = featured_items;

console.log(items);
console.log(featured_items);
console.log(current_items);


function isItemInView(item){
  var rect = item.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function callbackFunc() {
    for (var i = 0; i < current_items.length; i++) {
      var featured = document.getElementById("featured");
      if (isItemInView(current_items[i]) ) {
        current_items[i].classList.add("show");
      }
    }
  }

  function cardDisplay() {
    if (current_items.length == featured_items.length) {
      current_items = items;
    } else {
      current_items = featured_items;
    }
    callbackFunc();
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
  
