var display = document.getElementById("reddit-content");

function redditGen() {
    var url = "https://www.reddit.com/r/news/hot.json";
    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(data){
            console.log(data)
            for (var i=0;i<3;i++){
                var divCont = document.createElement("div");
                divCont.classList.add("card");
                display.appendChild(divCont);

                var divBody = document.createElement("div");
                divBody.classList.add("card","news-card");
                divCont.appendChild(divBody);

                var img = document.createElement("img");
                img.setAttribute("src","assets/images/rLogo.png" )
                divBody.appendChild(img);

                var title = document.createElement("h4");
                title.classList.add("news-card-title");
                var a = document.createElement('a');
                a.setAttribute("href", data.data.children[i].data.url)
                a.innerText = data.data.children[i].data.title;
                title.appendChild(a);
                divBody.appendChild(title);

                var source = document.createElement("p");
                source.classList.add("news-card-author");
                source.innerHTML = "Source: " + data.data.children[i].data.domain;
                divBody.appendChild(source);
            }
        })
}
redditGen();