// import {covers} from './data.js';
// var covers = require('./data.js');
// Create variables targetting the relevant DOM elements here 👇
// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows"),
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows"),
  // createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows"),
  // createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows"),
];
var currentCover;
homeView = document.querySelector(".home-view");
savedView = document.querySelector(".saved-view");
formView = document.querySelector(".form-view");

// console.log(covers);

// Add your event listeners here 👇

// var randomCover = document.getElementById("controls");
// randomCover.style.backgroundColor = "green";
// console.log(document.querySelector(".random-cover-button"));
randomCoverButton = document.querySelector(".random-cover-button");


//iteration 0 stuff

// var randomCoverButton = document.querySelector(".random-cover-button");
// randomCoverButton.onclick =
//   function showThing() {
//     function getRandomInt(max) {
//       return Math.floor(Math.random() * max);
//     }
// console.log(randomCoverButton);
//     if (getRandomInt(2) === 1) {
//       var rgb = [];
//       for (var i = 0; i < 3; i++) {
//         rgb.push(Math.floor(Math.random() * 255));
//       }
//       randomCoverButton.style.color = 'rgb(' + rgb.join(',') + ')';
//       randomCoverButton.style.backgroundColor = 'gray';
//       randomCoverButton.style.backgroundColor.onmouseover = 'white';
//     }
//     else {
//       randomCoverButton.style.removeProperty('color');
//       randomCoverButton.style.removeProperty('background-color');
//     }
//     return Date.now();
//   };
//   document.querySelector(".random-cover-button").onmouseover = 
//   function hoverBackground()
//   {
//     if(randomCoverButton.style.color === ''){
//       randomCoverButton.style.removeProperty('background-color');
//     }
//     else{
//       randomCoverButton.style.backgroundColor = 'white';

//     }
//   }
//   document.querySelector(".random-cover-button").onmouseout = 
//   function returnBackground()
//   {
//     if(randomCoverButton.style.backgroundColor === ''){
//     }else{
//       if(randomCoverButton.style.color !== ''){
//       randomCoverButton.style.backgroundColor = 'gray';}
//       else{
//         randomCoverButton.style.removeProperty('background-color');

//       }
//     }
//   }

//general code stuff to reference?^


// Create your event handlers and other functions here 👇


// We've provided two functions to get you started

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

randomCoverButton.onclick =
  function createRandomCover() {
    var cover = {
      // id: Date.now(),
      coverImg: covers[getRandomIndex(covers)],
      title: titles[getRandomIndex(titles)],
      tagline1: descriptors[getRandomIndex(descriptors)],
      tagline2: descriptors[getRandomIndex(descriptors)],

    }
    while (cover.tagline1 === cover.tagline2) {
      cover.tagline2 = descriptors[getRandomIndex(descriptors)];
    }
    setMainCover(cover);
    return cover;
  }

function setMainCover(coverObject) {
  var mainCover = document.querySelector(".main-cover");
  mainCover.innerHTML = `
  <img class="cover-image" src="${coverObject.coverImg}">
  <h2 class="cover-title">${coverObject.title}</h2>
  <h3 class="tagline">A tale of <span class="tagline-1">${coverObject.tagline1}</span> and <span class="tagline-2">${coverObject.tagline2}</span></h3>
  <img class="price-tag" src="./assets/price.png">
  <img class="overlay" src="./assets/overlay.png">
`
  return mainCover;
}

//iteration 1 stuff



makeCoverButton = document.querySelector(".make-new-button");
makeCoverButton.onclick =
  function formVisibility() {
    homeView.style.visibility = "hidden";
    savedView.style.visibility = "hidden";
    document.querySelector(".home-button").style.visibility = "";
    randomCoverButton.style.visibility = "hidden";
    formView.style.display = "block";
  }

savedCoverButton = document.querySelector(".view-saved-button");
savedCoverButton.onclick =
  function formVisibility() {
    homeView.style.visibility = "hidden";
    savedView.style.visibility = "";
    savedView.style.display = "block";

    document.querySelector(".home-button").style.visibility = "";
    randomCoverButton.style.visibility = "hidden";
    // formView.style.display = "hidden";
    savedView.style.display = "block";

    showSavedCovers(savedCovers);
  }


  //not currently working right; how to get title to show up on individual book covers?
  var savedCoversSection = document.querySelector(".saved-covers-section");
  function showSavedCovers(savedCoverArray){
    for(i = 0;i <savedCoverArray.length; i++){
      savedCoversSection.innerHTML += `  <img class="mini-cover ${i}" src="${savedCoverArray[i].coverImg}">
      <h3 class="cover-title ${i}">${savedCoverArray[i].title}</h3>`
      // <h4 class="tagline${i}">A tale of <span class="tagline-1">${savedCoverArray[i].tagline1}</span> and <span class="tagline-2">${savedCoverArray[i].tagline2}</span></h4>
      // <img class="price-tag${i}" src="./assets/price.png">
      // <img class="overlay${i}" src="./assets/overlay.png">
      // document.querySelector(`.main-cover${i}`).style.height = '125px';
      // document.querySelector(`.cover-image${i}`).style.width = '100px';
      // document.querySelector(`.cover-title${i}`).style.height = '100px';
      // document.querySelector(`.cover-title${i}`).style.width = '75px';
      // document.querySelector(`.tagline${i}`).style.height = '100px';
      // document.querySelector(`.tagline${i}`).style.width = '75px';
      // document.querySelector(`.overlay${i}`).style.height = '100px';
      // document.querySelector(`.overlay${i}`).style.width = '75px';
      // document.querySelector(`.price-tag${i}`).style.height = '100px';
      // document.querySelector(`.price-tag${i}`).style.width = '75px';

    }
    document.querySelector('.cover-image').style.height = '100px';

    console.log(savedCoverArray);
    return savedCoverArray;
  }
  




function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
}
