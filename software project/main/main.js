
function handleShopNowButtonClick() {
    alert("You clicked the Shop Now button!");
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


