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
var savedCoversSection = document.querySelector('.saved-covers-section');

var createCoverInput = document.querySelector('#cover');
var createTitleInput = document.querySelector('#title');
var createDescriptor1Input = document.querySelector('#descriptor1');
var createDescriptor2Input = document.querySelector('#descriptor2');
var makeMyBookBtn = document.querySelector('.create-new-book-button');

// We've provided a few variables below
var savedCovers = [];
var currentCover;

// Add your event listeners here 👇
window.onload = randomCover();
randomCoverBtn.addEventListener('click', changeCover);
makeNewCoverBtn.addEventListener('click', displayNewCoverPage);
homeBtn.addEventListener('click', displayHomePage);
makeMyBookBtn.addEventListener('click', makeNewCover);
saveCoverBtn.addEventListener('click', saveCover);
viewSavedCoversBtn.addEventListener('click', function() {
  displaySavedPostersPage(savedCoversPage);
  showCovers(savedCovers);
});
savedCoversSection.addEventListener('dblclick', deleteCover);

// Create your event handlers and other functions here 👇
function randomCover() {
  currentCover = new Cover(coverImage.src = covers[getRandomIndex(covers)], coverTitle.innerText = titles[getRandomIndex(titles)], taglineOne.innerText = descriptors[getRandomIndex(descriptors)], taglineTwo.innerText = descriptors[getRandomIndex(descriptors)]);
}

function changeCover() {
  randomCover();
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  taglineOne.innerText = currentCover.tagline1;
  taglineTwo.innerText = currentCover.tagline2;
}

function hideElement(element) {
  element.classList.add('hidden');
}

function showElement(element) {
  element.classList.remove('hidden');
}

function displayNewCoverPage() {
  showElement(makeYourOwnPage);
  showElement(homeBtn);
  hideElement(homePage);
  hideElement(savedCoversPage);
  hideElement(randomCoverBtn);
  hideElement(saveCoverBtn);
}

function displayHomePage() {
  showElement(homePage);
  showElement(randomCoverBtn);
  showElement(saveCoverBtn);
  hideElement(makeYourOwnPage);
  hideElement(homeBtn);
}

function displaySavedPostersPage() {
  showElement(savedCoversPage);
  showElement(homeBtn);
  hideElement(homePage);
  hideElement(makeYourOwnPage);
  hideElement(randomCoverBtn);
  hideElement(saveCoverBtn);
}

function makeNewCover() {
  event.preventDefault();
  currentCover = new Cover(createCoverInput.value, createTitleInput.value, createDescriptor1Input.value, createDescriptor2Input.value);
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  taglineOne.innerText = currentCover.tagline1;
  taglineTwo.innerText = currentCover.tagline2;
  displayHomePage();
}

function saveCover() {
  if (savedCovers.includes(currentCover)) {
    return savedCovers;
  }
  savedCovers.push(currentCover);
}

function showCovers() {
  savedCoversSection.innerHTML = '';
  for (var i = 0; i < savedCovers.length; i++) {
  savedCoversSection.innerHTML +=
  `<section class="mini-cover" id="${savedCovers[i].id}">
    <img class="cover-image" src='${savedCovers[i].cover}' id="${savedCovers[i].id}">
    <h2 class="cover-title">${savedCovers[i].title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    <img class="price-tag" src="./assets/price.png">
    <img class="overlay" src="./assets/overlay.png">
  </section>`
  }
}

function deleteCover() {
  var removeCover = event.target.id;
  for (var i = 0; i < savedCovers.length; i++) {
    if (`${savedCovers[i].id}` === removeCover) {
      savedCovers.splice([i], 1);
    }
  }
  showCovers();
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
