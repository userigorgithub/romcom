// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var taglineOne = document.querySelector('.tagline-1');
var taglineTwo = document.querySelector('.tagline-2');

var randomCoverBtn = document.querySelector('.random-cover-button');
var saveCoverBtn = document.querySelector('.save-cover-button');
var viewSavedCoversBtn = document.querySelector('.view-saved-button');
var makeNewCoverBtn = document.querySelector('.make-new-button');
var homeBtn = document.querySelector('.home-button');

var homePage = document.querySelector('.home-view');
var makeYourOwnPage = document.querySelector('.form-view');
var savedCoversPage = document.querySelector('.saved-view');

var createCoverInput = document.querySelector('#cover');
var createTitleInput = document.querySelector('#title');
var createDescriptor1Input = document.querySelector('#descriptor1');
var createDescriptor2Input = document.querySelector('#descriptor2');
var makeMyBookBtn = document.querySelector('.create-new-book-button');


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.onload = changeCover();
randomCoverBtn.addEventListener('click', changeCover);
makeNewCoverBtn.addEventListener('click', displayNewCoverPage);
viewSavedCoversBtn.addEventListener('click', viewSavedCoversPage);
makeMyBookBtn.addEventListener('click', makeNewCover);

// Create your event handlers and other functions here 👇
function showElement(element) {
  element.classList.remove('hidden');
}

function hideElement(element) {
  element.classList.add('hidden');
}

function changeCover() {
  currentCover = new Cover(coverImage.src, coverTitle.innerText, taglineOne.innerText, taglineTwo.innerText);
  coverImage.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  taglineOne.innerText = descriptors[getRandomIndex(descriptors)];
  taglineTwo.innerText = descriptors[getRandomIndex(descriptors)];
}

function displayNewCoverPage() {
  showElement(makeYourOwnPage);
  hideElement(homePage);
}

function displayHomePage() {
  showElement(homePage);
  hideElement(makeYourOwnPage);
}

function makeNewCover() {
  // event.preventDefault();
  currentCover = new Cover(createCoverInput.value, createTitleInput.value, createDescriptor1Input.value, createDescriptor2Input.value);
  coverImage.src = currentCover.coverImgSrc;
  coverTitle.innerText = currentCover.title;
  taglineOne.innerText = currentCover.descriptor1;
  taglineTwo.innerText = currentCover.descriptor2;

}


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
