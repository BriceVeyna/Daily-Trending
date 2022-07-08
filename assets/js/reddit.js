var display = document.getElementById("redditDisplay");
var redditButton = $("#redditButton");

redditButton.click(function(event) {
    event.preventDefault
    redditGen();
})


function redditGen() {
    var url = "https://www.reddit.com/r/news/hot.json";
    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(data){
            console.log(data)
            display.innerHTML = ""
            for (var i=0;i<6;i++){
                
                //console.log(data.data.children[i].data.title)
                var newDiv = document.createElement("div");
                var head = document.createElement("h3");
                var link = document.createElement("a");
                head.innerHTML = data.data.children[i].data.title;
                link.innerHTML = data.data.children[i].data.url
                link.setAttribute("href", data.data.children[i].data.url)
                display.appendChild(newDiv);
                newDiv.appendChild(head);
                newDiv.appendChild(link);
            }
        })
}