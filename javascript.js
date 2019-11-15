

STORE = {
    selectedNum: 3,
    numURL: 'https://dog.ceo/api/breeds/image/random/'
}

function getDogImage() {
  fetch(STORE.numURL)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson));
    // .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  let doggoUrls = responseJson.message;
  console.log(doggoUrls);
  let ul = $("#dog-images");
  ul.empty();
  doggoUrls.forEach(img => {
    ul.append(`<li><img src="${img}"/></li>`);
  });
  $("section").show();
 
  // $('.results-img').replaceWith(
  //   `<img src="${responseJson.message}" class="results-img">`
  // )
  // //display the results section
  // $('.results').removeClass('hidden');
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