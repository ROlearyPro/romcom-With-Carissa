
// Create variables targetting the relevant DOM elements here 👇
// We've provided a few variables below
var savedCovers = [
  // createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows"),
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


homeCover = document.querySelector(".cover-image");
homeCover.id = "mainCover";
homeTitle = document.querySelector(".cover-title");
homeTitle.id = "mainTitle";

homeTagline1 = document.querySelector(".tagline-1");
homeTagline1.id = "mainTagline1";

homeTagline2 = document.querySelector(".tagline-2");
homeTagline2.id = "mainTagline2";


// Create your event handlers and other functions here 👇


// We've provided two functions to get you started

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function setMainCover(coverObject) {

  var mainCover = document.querySelector(".main-cover");
  mainCover.innerHTML =
    `
  <img class="cover-image" id = "mainCover" src="${coverObject.coverImg}">
  <h2 class="cover-title" id = "mainTitle">${coverObject.title}</h2>
  <h3 class="tagline">A tale of <span class="tagline-1" id = "mainTagline1">${coverObject.tagline1}</span> and <span class="tagline-2" id = "mainTagline2">${coverObject.tagline2}</span></h3>
  <img class="price-tag" src="./assets/price.png">
  <img class="overlay" src="./assets/overlay.png">
`
  return mainCover;
}
// Add your event listeners here 👇

randomCoverButton.addEventListener('click', createRandomCover);
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
createRandomCover();

//iteration 1 stuff

homeButton.addEventListener('click', homeVisibility);
function homeVisibility() {
  if (!savedView.classList.contains("hidden")) {
    savedView.classList.add("hidden");
  }
  if (!savedCoverButton.classList.contains("hidden")) {
    savedCoverButton.classList.add("hidden");
  }
  if (!formView.classList.contains("hidden")) {
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

makeCoverButton.addEventListener('click', formVisibility);

function formVisibility() {
  //removes homeButton's and formView's "hidden" class, gives other classes "hidden" instead, then loops showSavedCovers to display the array of saved covers
  if (!homeView.classList.contains("hidden")) {
    homeView.classList.add("hidden");
  }
  if (!randomCoverButton.classList.contains("hidden")) {
    randomCoverButton.classList.add("hidden");
  }
  if (!savedView.classList.contains("hidden")) {
    savedView.classList.add("hidden");
  }
  makeCoverButton.classList.add("hidden");
  saveButton.classList.add("hidden");
  savedCoverButton.classList.remove("hidden");
  homeButton.classList.remove("hidden");
  formView.classList.remove("hidden");
  savedCoversSection.innerHTML = null;
}


var deleteBookEventArray = [];

savedCoverButton.addEventListener('click', savedVisibility);

function savedVisibility() {
  //removes savedCoverButton's and the savedCoversSection's "hidden" class, gives other classes "hidden" instead, then loops showSavedCovers to display the array of saved covers
  if (!homeView.classList.contains("hidden")) {
    homeView.classList.add("hidden");
  }
  if (!randomCoverButton.classList.contains("hidden")) {
    randomCoverButton.classList.add("hidden");
  }
  if (!formView.classList.contains("hidden")) {
    formView.classList.add("hidden");
  }
  if (!savedCoverButton.classList.contains("hidden")) {
    savedCoverButton.classList.add("hidden");
  }



  if (savedView.classList.contains("hidden")) {
    for (i = 0; i < savedCovers.length; i++) {
      showSavedCovers(savedCovers, i);
    }
    for (i = 0; i < savedCovers.length; i++) {
      deleteBookEventArray[i] = document.querySelector(`#savedCoverID${i}`);
      deleteBookEventArray[i].valueInArray = savedCovers[i];
      deleteBookEventArray[i].indexValue = i;
      deleteBookEventArray[i].addEventListener('dblclick', deleteSavedCover)
      console.log("added event listener to deleteBookEventArray[" + i + "], is it working?")
    }
  }
  makeCoverButton.classList.remove("hidden");
  homeButton.classList.remove("hidden");
  saveButton.classList.add("hidden");
  savedCoverButton.classList.add("hidden");
  savedView.classList.remove("hidden");
}
/**
From the saved covers view, if a user double clicks a saved poster, it will be deleted
HTML onclick attributes should not be used in any HTML code - 
all functionality should be through JavaScript. 
*/

function deleteSavedCover() {

  var valueToFind = this.valueInArray;
  var indexV = this.indexValue;
  var indexFound = savedCovers.findIndex(function (valueToFind) {
    return ((savedCovers[indexV].coverImg === valueToFind.coverImg) && (savedCovers[indexV].title === valueToFind.title) && (savedCovers[indexV].tagline1 === valueToFind.tagline1) && (savedCovers[indexV].tagline2 === valueToFind.tagline2))
  });



  savedCovers.splice(indexFound, 1);
  savedCoversSection.innerHTML = null;
  savedView.classList.add("hidden");
  savedVisibility();

}

function showSavedCovers(savedCoverArray, i) {
  // adds innerHTML to savedCoversSection, taking in the index so that it can declare unique id values for each book.
  savedCoversSection.innerHTML +=
    `<section class="savedCover mini-cover" id = "savedCoverID${i}">
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
  setMainCover(bookCreated);
  homeVisibility();
  event.preventDefault();
}


// Goals: Prevent the array from storing any duplicates;
// Make it so that on the home page, pressing "save cover" will actually save the cover
saveButton.addEventListener('click', saveTheCover);

function saveTheCover() {
  // Redeclares the home values so that we can accurately save them, even if random/makeCover have been called

  homeCover = document.querySelector(".cover-image");
  homeTitle = document.querySelector(".cover-title");
  homeTagline1 = document.querySelector(".tagline-1");
  homeTagline2 = document.querySelector(".tagline-2");
  var tempCover = createCover(homeCover.src, homeTitle.innerText, homeTagline1.innerText, homeTagline2.innerText);
  // calls objectEquality, which compares the new cover's image, taglines, and title with those of the books already in the array, and returns false if ALL of those values are the same
  if (objectEquality(savedCovers, tempCover) === false) {
    savedCovers.push(tempCover);
  }
}

// compares the new cover's image, taglines, and title with those of the books already in the array, and returns false if ALL of those values are the same
function objectEquality(arrayOfObjects, intoArray) {
  var areSame = false;
  for (i = 0; i < arrayOfObjects.length; i++) {
    if ((intoArray.coverImg === arrayOfObjects[i].coverImg) && (intoArray.title === arrayOfObjects[i].title) && (intoArray.tagline1 === arrayOfObjects[i].tagline1) && (intoArray.tagline2 === arrayOfObjects[i].tagline2))
      areSame = true;

  }
  return areSame;
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
