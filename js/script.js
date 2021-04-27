// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
var giphyLink = `https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC`;

$(".search-button").click(function(){
  fetch(giphyLink)

        .then(function(response) {
        return response.json();
        })

        .then(function(data) {
        console.log(data.data[0].images.original.url);
        $('').append();
        });

  
});

