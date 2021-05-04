// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */


$(".search-button").click(function(){
  let userInput = $('.search-term').val();
  var giphyLink = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=pg&api_key=dc6zaTOxFJmzC`;
  let randomNumbers = Math.random();
  
  fetch(giphyLink)
  
  

        .then(function(response) {
        return response.json();
        })

        .then(function(data) {
        console.log(data.data[Math.floor(Math.random() * data.data.length)].images.original.url);
        
        $('').append();
        $(".main").html("<img src =" + (data.data[Math.floor(Math.random() * data.data.length)].images.original.url) + ">");
        });

 
  
});

//Math.floor(Math.random() * 10);