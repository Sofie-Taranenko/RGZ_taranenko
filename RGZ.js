const tabsBtn   = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    

            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.tabs__nav-btn').click();
var slider = document.getElementById('font-size');
var rng = document.getElementById('font-size');
var text = document.querySelector('.glv');  


function changeColor(color) {
      document.body.style.background = color;
  }

function changeColor2(color) {
    document.body.style.color = color;
}
    
function Theme() {
      changeColor('black');
      changeColor2('white')
  }

function Theme2() {
    changeColor('white');
    changeColor2('black');
  }







