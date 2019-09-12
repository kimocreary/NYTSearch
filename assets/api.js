$(document).ready(function() {
    $("#searchBtn").on("click", function() {
        var searchTerm = $("#inputSearch").val();
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=QdyHobxkLpnAFgjEpZglGEp3g4uTa7QN";
    $.ajax ({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response.response.docs[0].headline.main);
        console.log(response.response.docs[0].byline.original);
    });
    })
});