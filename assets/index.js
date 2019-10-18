$(document).ready(function() {
    // on click for each id for pre set data.
    $(document).on("click", Meme);
    $(document).on("click", "#theOffice", memeData);
    $(document).on("click", "#Nfl", memeData);
    $(document).on("click", "#Funny", memeData);
    $(document).on("click", "#Fail", memeData);
});




function memeData() {
    var search = $(this).attr("role");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + title + "&api_key=L8YGVZbCd7HXg8g9n320OoCvUbKe9IIt&limit= 10 ";
}
$.ajax({
    url: queryURL,
    method: "GET",
}).then(function(response) {
    console.log(response);
})