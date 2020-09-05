var grid = document.getElementById("card-grid");
var bar = document.getElementById("progress");


function cardCreate(data){

    // <div class="card">
    //     <a href=".//player.html">
    //     <img class="thumbnail" src="https://alotofrandomcrap.files.wordpress.com/2018/06/casacover.jpg?w=1100" alt="thumbnail"/>
    //     <h3 class="title">Money Heist: Episode 1</h3>
    //    </a>
    //   </div>

    var mainCard = document.createElement("div");
    mainCard.classList.add("card");

    var hyperLink = document.createElement("a");
    hyperLink.href = "./player.html?vId=" + data.id;

    var videoImg = document.createElement("img");
    videoImg.classList.add("thumbnail");
    videoImg.src = data.thumbnail;
    //thumbnail.alt = cardAlt;
    mainCard.appendChild(videoImg);
    hyperLink.appendChild(videoImg);

    var videoTitle = document.createElement("h3");
    videoTitle.classList.add("title");
    videoTitle.innerText = data.title;
    hyperLink.appendChild(videoTitle);
    mainCard.appendChild(hyperLink);
    
    mainCard.appendChild(videoTitle);
    
    return mainCard;

}

// console.log(cardCreate());
var http = new XMLHttpRequest();
http.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/playlist" , true);
http.send();
http.onreadystatechange = function(){
     bar.style.display = "block";

    if(http.readyState === 4){
        bar.style.display = "none";
        var response = JSON.parse(http.responseText);
        for(var i=0; i<response.length; i++){
             //console.log(response[i]);
            var data = cardCreate(response[i]);
            grid.appendChild(data);
    }

    }
}