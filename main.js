const card = document.querySelector('.card');

const myVideo = document.getElementById("video1");

card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
    myVideo.play();
});




