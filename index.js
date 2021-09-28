const xhr = new XMLHttpRequest;
let Newsaccordion = document.getElementById("Newsaccordion");
xhr.open("GET", "https://gnews.io/api/v4/search?q=example&token=51a8ace214baad00ee3e518399017f49", true);
xhr.onload = function () {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let html = "";
        articles.forEach(function (element, index) {
            html += `<div class="accordion-item">
                        <h2 class="accordion-header" id="heading${index}">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                        ${element.title}
                       </button>
                       </h2>
                    <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      ${element.content}...<a href= ${element.url} target="_blank"><b>Read more here</b></a>
                    </div>
                    </div>
                </div>`

        });
    Newsaccordion.innerHTML=html;

    }
    else {
        console.log("Some error occured");
    }
}
xhr.send();
// 51a8ace214baad00ee3e518399017f49
// https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=04c70ef7899444819f64100d32885c59