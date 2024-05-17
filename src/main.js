
// Create variables targetting the relevant DOM elements here 👇
// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows"),
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows"),
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows"),
  // createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows"),
];
var currentCover;
homeView = document.querySelector(".home-view");
savedView = document.querySelector(".saved-view");
formView = document.querySelector(".form-view");

makeCoverButton = document.querySelector(".make-new-button");
homeButton = document.querySelector(".home-button");
saveButton = document.querySelector(".save-cover-button");
newButton = document.querySelector(".make-new-button");
savedCoverButton = document.querySelector(".view-saved-button");
randomCoverButton = document.querySelector(".random-cover-button");
savedCoversSection = document.querySelector(".saved-covers-section");


// console.log(covers);

// Add your event listeners here 👇



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

function setMainCover(coverObject) {

  var mainCover = document.querySelector(".main-cover");
  mainCover.innerHTML =
    `
  <img class="cover-image" src="${coverObject.coverImg}">
  <h2 class="cover-title">${coverObject.title}</h2>
  <h3 class="tagline">A tale of <span class="tagline-1">${coverObject.tagline1}</span> and <span class="tagline-2">${coverObject.tagline2}</span></h3>
  <img class="price-tag" src="./assets/price.png">
  <img class="overlay" src="./assets/overlay.png">
`
  return mainCover;
}
// Add your event listeners here 👇

randomCoverButton.onclick = function createRandomCover() {
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

//iteration 1 stuff
homeButton.onclick =
  function homeVisibility() {
    if (savedView.classList.contains("hidden") === false) {
      savedView.classList.add("hidden");
    }
    if (savedCoverButton.classList.contains("hidden") === false) {
      savedCoverButton.classList.add("hidden");
    }
    if (formView.classList.contains("hidden") === false) {
      formView.classList.add("hidden");
    }
    randomCoverButton.classList.remove("hidden");
    saveButton.classList.remove("hidden");
    homeView.classList.remove("hidden")
    homeButton.classList.add("hidden");
    makeCoverButton.classList.remove("hidden");
    savedCoverButton.classList.remove("hidden");
    savedCoversSection.classList.add("hidden");
    savedCoversSection.innerHTML = null;
  }

makeCoverButton.onclick =
  function formVisibility() {
    //removes homeButton's and  formView's "hidden" class, gives other classes "hidden" instead, then loops showSavedCovers to display the array of saved covers

    if (homeView.classList.contains("hidden") === false) {
      homeView.classList.add("hidden");
    }
    if (randomCoverButton.classList.contains("hidden") === false) {
      randomCoverButton.classList.add("hidden");
    }
    if (savedView.classList.contains("hidden") === false) {
      savedView.classList.add("hidden");
    }
    makeCoverButton.classList.add("hidden");
    saveButton.classList.add("hidden");
    savedCoverButton.classList.remove("hidden");
    homeButton.classList.remove("hidden");
    formView.classList.remove("hidden");
    savedCoversSection.innerHTML = null;
  }


savedCoverButton.onclick =

  function savedVisibility() {
    //removes savedCoverButton's and the savedCoversSection's "hidden" class, gives other classes "hidden" instead, then loops showSavedCovers to display the array of saved covers
    if (homeView.classList.contains("hidden") === false) {
      homeView.classList.add("hidden");
    }
    if (randomCoverButton.classList.contains("hidden") === false) {
      randomCoverButton.classList.add("hidden");
    }
    if (formView.classList.contains("hidden") === false) {
      formView.classList.add("hidden");
    }
    if (savedCoverButton.classList.contains("hidden") === false) {
      savedCoverButton.classList.add("hidden");
    }
    if (savedView.classList.contains("hidden")) {
      for (i = 0; i < savedCovers.length; i++) {
        showSavedCovers(savedCovers, i);
      }
    }
    homeButton.classList.remove("hidden");
    saveButton.classList.add("hidden");
    savedCoverButton.classList.add("hidden");
    savedView.classList.remove("hidden");
  }


function showSavedCovers(savedCoverArray, i) {
  // adds innerHTML to savedCoversSection, taking in the index so that it can declare unique id values for each book.
  savedCoversSection.innerHTML +=
    `<section class="savedCover mini-cover">
      <img class="savedCover" id="coverArrayID${i}" src="${savedCoverArray[i].coverImg}">
      <h2 class="savedTitle" id="titleArrayID${i}">${savedCoverArray[i].title}
      <h3 class="tagline" id="taglineID${i}">A tale of <span class="tagline-1">${savedCoverArray[i].tagline1}</span> and <span class="tagline-2">${savedCoverArray[i].tagline2}</span>
      </h3>
      </h2>
      <img class="overlay" id="overlayID${i}" src="./assets/overlay.png">  
        `
  //Adds appropriate classes to each newly-created element
  var arrayCover = document.querySelector(`#coverArrayID${i}`);
  arrayCover.classList.add("mini-cover");

  var arrayTitle = document.querySelector(`#titleArrayID${i}`);
  arrayTitle.classList.add("cover-title");

  var arrayTagline = document.querySelector(`#taglineID${i}`);
  arrayTagline.classList.add("tagline");

  // var arrayPriceTag = document.querySelector(`#price-tagID${i}`);
  // arrayPriceTag.classList.add("price-tag");

  var arrayOverlay = document.querySelector(`#overlayID${i}`);
  arrayOverlay.classList.add("overlay");
  return savedCoverArray;
}

//input.value
var inputCover = document.querySelector('#cover');
var inputTitle = document.querySelector('#title');
var inputDescriptor1 = document.querySelector('#descriptor1');
var inputDescriptor2 = document.querySelector('#descriptor2');
var makeNewBookButton = document.querySelector('.create-new-book-button');

makeNewBookButton.addEventListener('click', makeMyBook);

function makeMyBook() {
  var enteredImgSrc = inputCover.value;
  var enteredTitle = inputTitle.value;
  var enteredDescriptor1 = inputDescriptor1.value;
  var enteredDescriptor2 = inputDescriptor2.value;
  var bookCreated = createCover(enteredImgSrc, enteredTitle, enteredDescriptor1, enteredDescriptor2);
  console.log(bookCreated)
}

/* 
const checkbox = document.querySelector("#id-checkbox");

checkbox.addEventListener("click", checkboxClick, false);

function checkboxClick(event) {
  let warn = "preventDefault() won't let you check this!<br>";
  document.getElementById("output-box").innerHTML += warn;
  event.preventDefault();
}
*/




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
