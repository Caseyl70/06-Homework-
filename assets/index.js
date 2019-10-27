// Going to create an On Click for the buttons
$("#Memes").on("click", ".office", ".NFL", ".NHL", ".NBA", ".Marvel", function() {
    var input = $(this).attr("data-meme");
    // query url will be where the data is coming from using the giphy api
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + keyword + "&api_key=L8YGVZbCd7HXg8g9n320OoCvUbKe9IIt&limit=10";
    console.log("input");
    // Using ajax call to use the Giphy API

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log("MEME ME");
        var result = response.data;
        // for loop for giphy images
        for (var i = 0; i < result.length; i++) {
            var animate = $("<div>");
            // inserting a rating for each of the memes based on graphic
            var rating = result[i].rating;
            var createRate = $("<p>").text("Meme Rate: " + rating);
            // inserting a place for images to populate
            var memeImage = $("<img>");
            // source attribute
            memeImage.attr("src", result[i].images.fixed_height_still.url);
            // images attribute for still MEMEs
            memeImage.attr("data-still", result[i].images.fixed_height_still.url);
            // images attribute for animated MEMEs
            memeImage.attr("data-animate", result[i].images.fixed_height.url);
            // adding class for user input of new MEMES
            memeImage.addClass("MEMES");

            // After the data gets pulled through the ajax call the data will be show before "PREPEND" to the page
            animate.prepend(createRate);
            animate.prepend(memeImage);
            console.log("MEMES ALIVE!!!!");
            // Inserting A place where the images will appear.
            $("#FUNNY").prepend(memeImage);
        }
    })
})