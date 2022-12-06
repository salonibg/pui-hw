//TIMELINE
var items = document.querySelectorAll("li");

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
    for (var i = 0; i < items.length; i++) {
      var featured = document.getElementById("featured");
      var toggle = document.getElementById("button-1");
      console.log(toggle.knobs)
      if (isItemInView(items[i]) ) {
        //&& featured.style.display == 'block'
        items[i].classList.add("show");
        //featured.style.display = 'none';
        //toggle.innerHTML = 'Featured';
      } else {
        //featured.style.display = 'block';
        //toggle.innerHTML = 'All';
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

