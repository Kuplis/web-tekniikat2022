
// API
fetch('https://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote')
.then(response => response.json())
.then(data => {
    document.getElementById("api").innerHTML = "<h2>" + data.content + "</h2>";
}
);

// get new quote
document.getElementById("refresh").onclick = function(){location.reload()};

