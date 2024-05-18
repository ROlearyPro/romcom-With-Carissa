
// Create variables targetting the relevant DOM elements here 👇
// We've provided a few variables below
var savedCovers = [
  // createCover('http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg', 'Sunsets and Sorrows', 'sunsets', 'sorrows'),
];

var homeView = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');
var formView = document.querySelector('.form-view');
var makeCoverButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');
var saveButton = document.querySelector('.save-cover-button');
var newButton = document.querySelector('.make-new-button');
var savedCoverButton = document.querySelector('.view-saved-button');
var randomCoverButton = document.querySelector('.random-cover-button');
var savedCoversSection = document.querySelector('.saved-covers-section');
var homeCover = document.querySelector('.cover-image');
var homeTitle = document.querySelector('.cover-title');
var homeTagline1 = document.querySelector('.tagline-1');
var homeTagline2 = document.querySelector('.tagline-2');
var inputCover = document.querySelector('#cover');
var inputTitle = document.querySelector('#title');
var inputDescriptor1 = document.querySelector('#descriptor1');
var inputDescriptor2 = document.querySelector('#descriptor2');
var makeNewBookButton = document.querySelector('.create-new-book-button');
var deleteBookEventArray = [];
var currentCover;


// Add your event listeners here 👇
homeButton.addEventListener('click', homeVisibility);
savedCoverButton.addEventListener('click', savedVisibility);
randomCoverButton.addEventListener('click', createRandomCover);
makeCoverButton.addEventListener('click', formVisibility);
makeNewBookButton.addEventListener('click', makeMyBook);
saveButton.addEventListener('click', saveTheCover);

// Create your event handlers and other functions here 👇
// We've provided two functions to get you started

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function setMainCover(coverObject) {
  var mainCover = document.querySelector('.main-cover');
  mainCover.innerHTML =
    `
  <img class='cover-image' id = 'mainCover' src='${coverObject.coverImg}'>
  <h2 class='cover-title' id = 'mainTitle'>${coverObject.title}</h2>
  <h3 class='tagline'>A tale of <span class='tagline-1' id = 'mainTagline1'>${coverObject.tagline1}</span> and <span class='tagline-2' id = 'mainTagline2'>${coverObject.tagline2}</span></h3>
  <img class='price-tag' src='./assets/price.png'>
  <img class='overlay' src='./assets/overlay.png'>
`
  return mainCover;
}

function createRandomCover() {
  var cover = {
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

function homeVisibility() {
  if (!savedView.classList.contains('hidden')) {
    savedView.classList.add('hidden');
  }
  if (!savedCoverButton.classList.contains('hidden')) {
    savedCoverButton.classList.add('hidden');
  }
  if (!formView.classList.contains('hidden')) {
    formView.classList.add('hidden');
  }
  randomCoverButton.classList.remove('hidden');
  saveButton.classList.remove('hidden');
  homeView.classList.remove('hidden')
  homeButton.classList.add('hidden');
  makeCoverButton.classList.remove('hidden');
  savedCoverButton.classList.remove('hidden');
  savedCoversSection.classList.add('hidden');
  savedCoversSection.innerHTML = null;
}

function formVisibility() {
  if (!homeView.classList.contains('hidden')) {
    homeView.classList.add('hidden');
  }
  if (!randomCoverButton.classList.contains('hidden')) {
    randomCoverButton.classList.add('hidden');
  }
  if (!savedView.classList.contains('hidden')) {
    savedView.classList.add('hidden');
  }
  makeCoverButton.classList.add('hidden');
  saveButton.classList.add('hidden');
  savedCoverButton.classList.remove('hidden');
  homeButton.classList.remove('hidden');
  formView.classList.remove('hidden');
  savedCoversSection.innerHTML = null;
}

function savedVisibility() {
  if (!homeView.classList.contains('hidden')) {
    homeView.classList.add('hidden');
  }
  if (!randomCoverButton.classList.contains('hidden')) {
    randomCoverButton.classList.add('hidden');
  }
  if (!formView.classList.contains('hidden')) {
    formView.classList.add('hidden');
  }
  if (!savedCoverButton.classList.contains('hidden')) {
    savedCoverButton.classList.add('hidden');
  }
  if (savedView.classList.contains('hidden')) {
    for (i = 0; i < savedCovers.length; i++) {
      showSavedCovers(savedCovers, i);
    }
    for (i = 0; i < savedCovers.length; i++) {
      deleteBookEventArray[i] = document.querySelector(`#savedCoverID${i}`);
      deleteBookEventArray[i].valueInArray = savedCovers[i];
      deleteBookEventArray[i].indexValue = i;
      deleteBookEventArray[i].addEventListener('dblclick', deleteSavedCover);
    }
  }
  makeCoverButton.classList.remove('hidden');
  homeButton.classList.remove('hidden');
  saveButton.classList.add('hidden');
  savedCoverButton.classList.add('hidden');
  savedView.classList.remove('hidden');
}

function deleteSavedCover() {
  var valueToFind = this.valueInArray;
  var indexV = this.indexValue;
  var indexFound = savedCovers.findIndex(function (valueToFind) {
    return ((savedCovers[indexV].coverImg === valueToFind.coverImg) && (savedCovers[indexV].title === valueToFind.title) && (savedCovers[indexV].tagline1 === valueToFind.tagline1) && (savedCovers[indexV].tagline2 === valueToFind.tagline2))
  });
  savedCovers.splice(indexFound, 1);
  savedCoversSection.innerHTML = null;
  savedView.classList.add('hidden');
  savedVisibility();
}

function showSavedCovers(savedCoverArray, i) {
  savedCoversSection.innerHTML +=
    `<section class='savedCover mini-cover' id = 'savedCoverID${i}'>
    <img class='savedCover' id='coverArrayID${i}' src='${savedCoverArray[i].coverImg}'>
    <h2 class='savedTitle' id='titleArrayID${i}'>${savedCoverArray[i].title}
    <h3 class='tagline' id='taglineID${i}'>A tale of <span class='tagline-1'>${savedCoverArray[i].tagline1}</span> and <span class='tagline-2'>${savedCoverArray[i].tagline2}</span>
    </h3>
    </h2>
    <img class='overlay' id='overlayID${i}' src='./assets/overlay.png'>`
  var arrayCover = document.querySelector(`#coverArrayID${i}`);
  arrayCover.classList.add('mini-cover');
  var arrayTitle = document.querySelector(`#titleArrayID${i}`);
  arrayTitle.classList.add('cover-title');
  var arrayTagline = document.querySelector(`#taglineID${i}`);
  arrayTagline.classList.add('tagline');
  var arrayOverlay = document.querySelector(`#overlayID${i}`);
  arrayOverlay.classList.add('overlay');
  return savedCoverArray;
}

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

function saveTheCover() {

  homeCover = document.querySelector('.cover-image');
  homeTitle = document.querySelector('.cover-title');
  homeTagline1 = document.querySelector('.tagline-1');
  homeTagline2 = document.querySelector('.tagline-2');
  var tempCover = createCover(homeCover.src, homeTitle.innerText, homeTagline1.innerText, homeTagline2.innerText);
  if (objectEquality(savedCovers, tempCover) === false) {
    savedCovers.push(tempCover);
  }
}

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

createRandomCover();