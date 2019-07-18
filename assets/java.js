

// variables

var searchItem = ["cats", "dark souls", "anime", "skateboarding"];

var newSearch = $(".form-control").val().trim();

var queryURL = "";



// var preSets = ["cats", "dark souls", "anime", "skateboarding"]


function showGif(searchTerm) {
    // get that gif ajaxing
    console.log(searchTerm)
    queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=UJXg9RazU2fUZvzxmjek7lfO2CbYQFhl&q=" + searchTerm + "&limit=10&offset=0&rating=G&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);


        // console.log(theGifs);


        var theGifs = response.data.data[i];


    });
    // console.log(showGif);
}


function preSetButts() {
    // loop over search item array 
    //creat button, add attr with the search term 

    var preButton = $("<button>")
    //set text
    // append
    for (var i = 0; i < searchItem; i++) {

        $("presetsDump").append;









        // console.log(theGifs);

    }
}
preSetButts();

//clikcevent for buttons
//review activity 10 
// on click get data attr
// call showGif with ()
console.log(showGif(searchItem));







// function searchIt(){


// };





// recieve info from button
$("#button").on("click", function () {
    event.preventDefault();


    searchItem.push(newSearch);

    console.log(searchItem);

    getGifs();

    console.log(response);

});





