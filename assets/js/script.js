var inputField = document.getElementById("inputField");
var nytDisplay = document.getElementById("nytDisplay");
var searchButton = $("#submitButton")
let input;

searchButton.click(function(event) {
    event.preventDefault
    input = inputField.value;
    console.log(input);
    nytGen();
})


function nytGen() {
    var url = "https://api.nytimes.com/svc/topstories/v2/" + input + ".json?api-key=3EhjUgQTBGHk7CXrATkMRdAWhhRYQrae";
    console.log(url);
    fetch(url)
        .then(function(response) {
            if(!response.ok) {
                console.log("not working");
                return
            }
            return response.json()
        })
        .then(function(data) {
            for (var i=1;i<7;i++) {
                console.log(data.results[i]);
                console.log(data.results[i].abstract);
                var newDiv = document.createElement("div");
                nytDisplay.appendChild(newDiv);
                var head = document.createElement("h3");
                var absP = document.createElement("p");
                var link = document.createElement("p");
                var title = data.results[i].title;
                var abstract = data.results[i].abstract;
                head.innerHTML = title;
                absP.innerHTML = abstract;
                link.innerHTML = data.results[i].short_url;
                newDiv.appendChild(head);
                newDiv.appendChild(absP);
                newDiv.appendChild(link)
                console.log(data.results[i].short_url);
            }
        })
}

