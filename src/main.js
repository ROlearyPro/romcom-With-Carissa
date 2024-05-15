// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇

// var randomCover = document.getElementById("controls");
// randomCover.style.backgroundColor = "green";

function showThing() {
  var thing = document.getElementById("controls");
  function getRandomInt(max) { 
  return Math.floor(Math.random() * max);}
    if (thing.style.display ==="none"){
      
  thing.style.display = "block";
  } else {
    if (getRandomInt(5) === 3){
      var rgb = [];
      for (var i = 0; i < 3; i++){
        rgb.push(Math.floor(Math.random()*255));
        
      }
      thing.style.color = 'rgb('+ rgb.join(',')+')';
    }
    else{
      thing.style.color = 'black';
    }
  thing.style.display = "none";
  }
  }
// Create your event handlers and other functions here 👇


// We've provided two functions to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
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
