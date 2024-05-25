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



document.addEventListener('DOMContentLoaded', function() {
    const cartButton = document.querySelector('.iconCart');
    const cart = document.querySelector('.cart');
    const closeCartButton = document.querySelector('.cart .close');

    cartButton.addEventListener('click', function() {
        cart.classList.toggle('active');
    });

    closeCartButton.addEventListener('click', function() {
        cart.classList.remove('active');
    });
});


