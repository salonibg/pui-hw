//HOME PAGE
//timeline
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
      if (isItemInView(items[i]) ) {
        items[i].classList.add("show");
      }
    }
  }

  function cardDisplay() {
    if (current_items.length == total) {
      current_items = featured_items;
    } else {
      current_items = items;
    }
    callbackFunc();
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);


//PROJECT DETAILS PAGE
//parse url parameter
const queryString = window.location.search;
const params = new URLSearchParams(queryString);

//extract project
const currentProject = params.get('project');

//populate intro DOM elements
const introBanner = document.querySelector('#banner');
const bannerPath = intro[currentProject].image;
introBanner.src = './project_assets/' + bannerPath;

const summaryElem = document.querySelector('#summary');
const summary = intro[currentProject].summary;
summaryElem.innerText = summary;

//const challengeElem = document.querySelector('#challenge');
//const challenge = intro[currentProject].details;
//challengeElem.innerText = challenge;

//populate research DOM elements
const researchImage = document.querySelector('#research_img');
const researchPath = research[currentProject].image;
introBanner.src = './project_assets/' + researchPath;


