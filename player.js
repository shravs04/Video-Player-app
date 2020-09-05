var videoId = window.location.search.split("=")[1];
var video = document.getElementById("frame");
var views = document.getElementById("view");
var title = document.getElementById("desc-title");
var para = document.getElementById("desc-para");
var playList = document.getElementById("playlist-div");


function cardCreate(data){

    // <div class="card">
    //     <a href="./watch-page/player.html">
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


function newReqest(){
    var http = new XMLHttpRequest();
    http.open("GET" , "https://5d76bf96515d1a0014085cf9.mockapi.io/playlist", true);
    http.send();
    http.onreadystatechange = function(){
        if(http.readyState === 4){
            var response = JSON.parse(http.responseText);
            for(var i=0; i<response.length; i++){
                //console.log(cardCreate(response[i]));
                playList.appendChild(cardCreate(response[i]));
            }
        }
    }
}

var http = new XMLHttpRequest();
http.open("GET" , "https://5d76bf96515d1a0014085cf9.mockapi.io/video/" + videoId, true);
http.send();
http.onreadystatechange = function(){
    if(http.readyState === 4){
        var response = JSON.parse(http.responseText);
        console.log(response);

        video.src = "https://player.vimeo.com/video/" + response.vimeoId;
        views.innerHTML = response.views + ' ' + "views";
        title.innerHTML = response.title;
        para.innerHTML = response.description;

        newReqest();
    }
}

