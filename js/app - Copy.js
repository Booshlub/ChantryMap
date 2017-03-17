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

  slides[homeslider-1].style.display = "block"; 
  dots[homeslider-1].classList.add("active");
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




