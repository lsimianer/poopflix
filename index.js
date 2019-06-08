
//          the plan for shit flix
//    1: ajax to html for omdb
// 2: create input boxes in html that allow the user to search for a title and input that to js >search api>print
// 3: dont just print, order by rating, or alphabetical or drop box to choose, thats ambitious.
// 4: see how much we can get done tonight, add time stress 

//needs        done <>     1: to create a fillable form in the html with a submit button
//  2: to take the submit button and use js to "onclick" form input>
// --> to the ajax query 

// var name = document.getElementById("#mtitle");
// console.log(name);

// $("#search").click(function(){
    
// }
//     document.querySelector('#searchTxt').value;
//     var x = document.getElementById("#mtitle").innerText.print;


//  search: function(input){

//     var input = document.getElementById("#mtitle");
//     console.log(input);
// });

// var input = Object.value("#mtitle");
$( document ).ready(function() {
    console.log( "ready!" );
});

var api = "https://www.omdbapi.com/?t=";
// var TITLE = "the terminator";
var apiKey = "&apikey=a5c61811";

var input = $('#mtitle');

$('#submit').on('click',movieSearch);

console.log($("#submit"))


function movieSearch() {
    event.preventDefault();

var url = api + input.val() + apiKey;
console.log(url);
$.ajax({
    url: url,
    method: "GET"
}).then(function(response) {
    // create new row
    var tRow = $("<tr>");

    var titleTd = $("<td>").text(response.Title);
    var yearTd = $("<td>").text(response.Year);
    var actorsTd = $("<td>").text(response.Actors);
    var ratingsTd = $("<td>").text(response.Ratings[0].Value);

    tRow.append(titleTd, yearTd, actorsTd, ratingsTd);
    
    $("tbody").append(tRow);
    console.log(response);
    console.log(response.Ratings[0].Value);

    // $('#m > tbody:last-child').append(tRow);

});

}

function gotData(response){

}

var movie = input;
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

    



