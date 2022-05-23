var card = document.querySelector('.card');

var myVideo = document.getElementById("video1");

card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
      myVideo.play();

});




