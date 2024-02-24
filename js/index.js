function inputSearch(string) {
    // Do something with the input string
    console.log("Search input:", string);
}

// Adding an event listener to an input element with id "searchInput"
document.getElementById("searchInput").addEventListener("input", function(event) {
    var searchString = event.target.value;
    inputSearch(searchString);
});
