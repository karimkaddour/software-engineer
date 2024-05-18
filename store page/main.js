
function handleShopNowButtonClick() {
    window.location.href = "http://127.0.0.1:5500/stor.html";
    
}




document.getElementById("shopNowButton").addEventListener("click", handleShopNowButtonClick);


function handleVideoHover() {
    this.style.opacity = "1";
}

function handleVideoHoverOut() {
    this.style.opacity = "0.5";
}


var headerVideos = document.querySelectorAll("#header #container video");

headerVideos.forEach(video => {
    video.addEventListener("mouseover", handleVideoHover);
    video.addEventListener("mouseout", handleVideoHoverOut);
});

document.querySelectorAll('#header #container video').forEach(video => {
    video.addEventListener('mouseover', function() {
        this.play();
    });
    video.addEventListener('mouseout', function() {
        this.pause();
        this.currentTime = 0;
    });
});

function switchonselect(){
var op1=document.getElementById("shop")
var selectElement = document.getElementById("select");

// Ge
var selectedOption = selectElement.options[selectElement.op1];


    
if(op1.selected){
    window.location.href = "http://127.0.0.1:5500/stor.html";


}
}


