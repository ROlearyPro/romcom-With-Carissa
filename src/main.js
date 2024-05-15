// import {covers} from './data.js';
// var covers = require('./data.js');
// Create variables targetting the relevant DOM elements here 👇
// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;
// console.log(covers);

// Add your event listeners here 👇

// var randomCover = document.getElementById("controls");
// randomCover.style.backgroundColor = "green";
// console.log(document.querySelector(".random-cover-button"));
randomCoverButton = document.querySelector(".random-cover-button");



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
function createRandomCover(){
var cover = {
  // id: Date.now(),
  coverImg: covers[getRandomIndex(covers)],
  title: titles[getRandomIndex(titles)],
  tagline1: descriptors[getRandomIndex(descriptors)],
  tagline2: descriptors[getRandomIndex(descriptors)],
  
}
while(cover.tagline1 === cover.tagline2) {
  cover.tagline2 = descriptors[getRandomIndex(descriptors)];
  }
  setMainCover(cover);
return cover;
}

function setMainCover(coverObject){
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
