function data() {
    var search = $(this).attr("ref");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + title + "&api_key=L8YGVZbCd7HXg8g9n320OoCvUbKe9IIt&limit= 10 ";
}
$.ajax({
    url: queryURL,
    method: "GET",
}).then(function(response) {
    console.log(response);
})