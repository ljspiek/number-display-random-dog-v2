

STORE = {
    selectedNum: 3,
    numURL: 'https://dog.ceo/api/breeds/image/random/'
}

function getDogImage() {
  fetch(STORE.numURL)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  }

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const num = $('.numInput').val();
    STORE.selectedNum = num;
    STORE.numURL = `https://dog.ceo/api/breeds/image/random/${STORE.selectedNum}`;
    console.log(STORE.numURL);
    getDogImage();
  });
}

$(function() {
    watchForm();
});