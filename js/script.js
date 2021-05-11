// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */


$("#search-button").click(function(){
  let userInput = $('.search-term').val();
  var giphyLink = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=pg&api_key=dc6zaTOxFJmzC`;
  let randomNumbers = Math.random();
  
  fetch(giphyLink)
  
  

        .then(function(response) {
        return response.json();
        })

        .then(function(data) {
        console.log(data.data[Math.floor(Math.random() * data.data.length)].images.original.url);
        
        $(".modal-stuff").html("<img src =" + (data.data[Math.floor(Math.random() * data.data.length)].images.original.url) + ">");
        });

  // Get the modal
var modal = document.getElementById("theModal");
  
  // Get the button that opens the modal
var btn = document.getElementById("search-button");
  
  // Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  console.log('click');
}
  
  // When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
 
  
});


//Math.floor(Math.random() * 10);