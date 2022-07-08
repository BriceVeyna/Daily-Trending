var inputField = document.getElementById("inputField");
var searchButton = $("#searchButton");
var nytDisplay = document.getElementById("times-content");


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
            nytDisplay.innerHTML = ""
            var startH3 = document.createElement("h3")
                startH3.innerHTML = "New York Times";
                nytDisplay.appendChild(startH3);
            for (var i=2;i<5;i++) {

                

                var divContainer = document.createElement("div");
                divContainer.classList.add("card");
                nytDisplay.appendChild(divContainer);

                var newDivTag = document.createElement("div");
                newDivTag.classList.add("card", "news-card");
                var labelSpan = document.createElement("span");
                divContainer.appendChild(newDivTag);
                labelSpan.innerHTML = data.results[i].section;
                labelSpan.classList.add("label")
                var lineBreak = document.createElement("br");
                newDivTag.appendChild(labelSpan);
                newDivTag.appendChild(lineBreak);

                var cardDiv = document.createElement("div");
                cardDiv.classList.add("card","news-card");
                var newImg = document.createElement("img");
                newImg.setAttribute("src", "./assets/images/test.png");
                cardDiv.appendChild(newImg);
                newDivTag.appendChild(cardDiv);

                var divHeadCont = document.createElement("div");
                divHeadCont.classList.add("card-section");
                cardDiv.appendChild(divHeadCont);
                var divHead = document.createElement("div");
                divHead.classList.add("news-card-date");
                divHead.innerHTML = moment().format("MMMM DD YYYY");
                divHeadCont.appendChild(divHead);

                var newArt = document.createElement("article");
                newArt.classList.add("news-card-article");
                var newh4 = document.createElement("h4");
                newh4.classList.add("news-card-title");
                var newA = document.createElement("a")
                newA.setAttribute("href",data.results[i].url);
                newA.innerText = data.results[i].abstract;
                newh4.appendChild(newA);
                divHead.appendChild(newArt);
                newArt.appendChild(newh4);

                var cardFooter = document.createElement("div");
                cardFooter.classList.add("news-card-author");
                cardFooter.innerHTML = data.results[i].byline;
                divHeadCont.appendChild(cardFooter);

                // labelHfref.href = data.results[i].section;
                // labelSpan.appendChild(labelHfref);

                // newDivContainer.appendChild(newDivTag);
                // newDivContainer.appendChild(labelSpan);

                





                //var newDiv = document.createElement("div");
                //nytDisplay.appendChild(newDiv);
                //var head = document.createElement("h3");
                //var absP = document.createElement("p");
                //var link = document.createElement("p");
                //var title = data.results[i].title;
                //var abstract = data.results[i].abstract;
                // head.innerHTML = title;
                // absP.innerHTML = abstract;
                // link.innerHTML = data.results[i].short_url;
                //newDiv.appendChild(head);
                //newDiv.appendChild(absP);
                //newDiv.appendChild(link)
                console.log(data.results[i].short_url);
            }
        })
}

