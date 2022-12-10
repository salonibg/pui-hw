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
console.log(intro[currentProject]);
const bannerPath = intro[currentProject].image;
console.log(bannerPath);
introBanner.src = './project_assets/' + bannerPath;

const summaryElem = document.querySelector('#summary');
const summary = intro[currentProject].summary;
summaryElem.innerText = summary;


//populate research DOM elements
const researchImage = document.querySelector('#research_img');
const researchPath = research[currentProject].image;
console.log(researchPath);
researchImage.src = './project_assets/' + researchPath;

const researchContent = document.querySelector('#research_content');
const researchInfo = research[currentProject].content;
researchContent.innerText = researchInfo;


//populate iteration DOM elements
const wireframeImg = document.querySelector('#wireframe_img');
const wireframePath = iterations[currentProject].image;
wireframeImg.src = './project_assets/' + wireframePath;

const wireframeContent = document.querySelector('#wireframe_content');
const wireframeInfo = iterations[currentProject].wireframeContent;
wireframeContent.innerText = wireframeInfo;

const methods = document.querySelector('#methodology');
const methodsInfo = iterations[currentProject].methods;
methods.innerText = methodsInfo;

const insight = document.querySelector('#insights');
const insightsInfo = iterations[currentProject].insights;
insight.innerText = insightsInfo;


//populate final DOM elements

const prototype = document.querySelector('#final_gif');
const prototypePath = final[currentProject].gif;
prototype.src = './project_assets/' + prototypePath;