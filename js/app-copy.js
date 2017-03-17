$(document).foundation();

var homeslider = 1;
showSlides(homeslider);

function moreslides(n) {
  showSlides(homeslider += n);
}

function currentSlide(n) {
  showSlides(homeslider = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("theSlides");
  var dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {homeslider = 1;}
  if (n < 1) {homeslider = slides.length;}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  if (slides.length > 0) 
  {
  slides[homeslider-1].style.display = "block"; 
  dots[homeslider-1].classList.add("active");
}
}


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}


function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


//Picture
function loadphoto(imgsrc){

  var sourcehtml = "<img src=\""+imgsrc+"\" class=\"large-12\">"; 
  $('#mainPhoto').html(sourcehtml);
  return false;

}




//Video

//Variables
var videofile = document.querySelector("#myVideo");
var controldiv = document.querySelector(".controls");
var playpause = document.querySelector(".pPause");
var downbtn = document.querySelector("#volDown");
var upbtn = document.querySelector("#volUp");
var mutebtn = document.querySelector("#volMute");
var srcbtns = document.querySelectorAll(".vidLoader");
console.log(mutebtn);
//Functions
//if (videofile != null) {
videofile.controls = false;
//controldiv.style.display = "block";
controldiv.classList.remove("hideMe");
videofile.volume = 1;
console.log("100% Volume");
//}
function playPauseVideo()
{
  
  if(videofile.paused)
  {
    videofile.play();
    playpause.value = "Pause";
    document.getElementById("pPause").innerHTML = '<img src="img/pause.png"  alt="pause"  />';
    console.log("pause");
    //ppbtn
  }

  else
  {
    videofile.pause();
    playpause.value = "Play";
    document.getElementById("pPause").innerHTML = '<img src="img/play.png"  alt="play"  />';
    console.log("play");
  }
}

function volumeDown()
{
  if(videofile.volume > 0)
  {
    videofile.volume -= .2;
    console.log('volume is '+(videofile.volume*100)+'%');
  }
}

function volumeUp()
{
  if(videofile.volume < 1)
  {
    videofile.volume += .2;
    console.log('volume is '+(videofile.volume*100)+'%');
  }
}

function muteVideo()
{
  videofile.volume = 0;
}

function swapVideo(e)
{
  console.log(e.target.id);
  videofile.src = "video/"+e.target.id+".mp4";
}

//if (playpause !=null) {
//Event Listeners
playpause.addEventListener('click', playPauseVideo, false);
downbtn.addEventListener('click', volumeDown, false);
upbtn.addEventListener('click', volumeUp, false);
mutebtn.addEventListener('click', muteVideo, false);
//}
for(var i = 0; i < srcbtns.length; i++)
{
  srcbtns[i].addEventListener('click', swapVideo, false);
}