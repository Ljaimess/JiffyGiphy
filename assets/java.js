

// variables

var preSets = ["cats", "dark souls", "anime", "skateboarding"];

var newSearch = "";

// get gif to show
function showGif() {

    newSearch = $(".form-control").val().trim();
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=UJXg9RazU2fUZvzxmjek7lfO2CbYQFhl&q=" + newSearch + "&limit=10&offset=0&rating=G&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var theGif = response.data;
        console.log(theGif);


        $("#gifDump").empty();

        for (var i = 0; i < theGif.length; i++) {


            var gifImg = response.data[i].images;
            console.log(gifImg);

            var newGifDiv = $("<div>");

            var newGif = $("<img>");

            newGif.attr("src", gifImg.fixed_width_still.url);
            newGif.attr("data-still", gifImg.fixed_width_still.url);
            newGif.attr("data-animate", gifImg.fixed_width.url);
            newGif.attr("data-state", "still");
            var pTag = ("<p>");
            newGif.text(pTag, response.data[i].rating);

            
            


           

            newGif.append(pTag);
            newGifDiv.append(newGif);

            $("#gifDump").prepend(newGifDiv);






        }

        console.log(theGif);
    });


    $(this).on("click", function () {

        var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");



        };
    });
    
};






// make my pre set searched load button

function preSetButts() {

    $("#preset-dump").empty();

    for (var i = 0; i < preSets.length; i++) {


        // var gifImg = response.data[i].images;
        var preButton = $("<button>");
        preButton.addClass("preGifs");
        preButton.text(preSets[i]);
        // preButton.attr("src", gifImg.fixed_width_still.url);
        // preButton.attr("data-still", gifImg.fixed_width_still.url);
        // preButton.attr("data-animate", gifImg.fixed_width.url);

        $("#preset-dump").append(preButton);

    }
}
preSetButts();




$("#button").on("click", function (event) {
    event.preventDefault();

    var newButtSearch = $(".form-control").val().trim();

    // $("#preset-dump").empty();

    preSets.push(newButtSearch);

    console.log(preSets);

    preSetButts();

    showGif();



});




