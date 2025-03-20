function side_open() {
  document.getElementsByClassName("mySidebar")[0].style.display = "block";
  document.getElementsByClassName("opacityHalf")[0].classList.toggle("opacity");

}
function side_close() {
  document.getElementsByClassName("mySidebar")[0].style.display = "none";
  document.getElementsByClassName("opacityHalf")[0].classList.toggle("opacity");

}

function dark() {
  document.body.classList.toggle("dark-mode");
  document.getElementsByClassName("gridone")[0].classList.toggle("dark-mode");
  document.getElementsByClassName("last")[0].classList.toggle("dark-mode");
  document.getElementsByClassName("last")[0].classList.toggle("upperBorder");
  document.getElementsByClassName("btn")[0].classList.toggle("dark-mode");
  document.getElementsByClassName("firstBtn")[0].classList.toggle("dark-mode");
  document.getElementsByClassName("mySidebar")[0].classList.toggle("dark-mode");
  document.getElementsByClassName("btn")[0].classList.toggle("btnBorder");
  document.getElementsByClassName("border")[0].classList.toggle("whiteBorder");
  document.getElementsByClassName("border")[1].classList.toggle("whiteBorder");
  document.getElementsByClassName("underLine")[0].classList.toggle("underBorder");
  for (let i = 0; i < 13; i++) {
    document.getElementsByClassName("num")[i].classList.toggle("whiteFont");
  }

}

let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
let totalSeconds = parseInt(localStorage.getItem("timeSpent")) || 0;
let timer;
function startTimer() {
  timer = setInterval(() => {
    totalSeconds++;
    localStorage.setItem("timeSpent", totalSeconds);
    document.getElementById("timer").innerText = formatTime(totalSeconds);
  }, 1000);
}
function stopTimer() {
  clearInterval(timer);
}
function resetTimer() {
  stopTimer();
  totalSeconds = 0;
  localStorage.setItem("timeSpent", totalSeconds);
  document.getElementById("timer").innerText = formatTime(totalSeconds);
  startTimer();
}
function formatTime(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;
  return `viewing this site for : ${hours.toString().padStart(2, '0')} hr ,${minutes.toString().padStart(2, '0')} min ,${secs.toString().padStart(2, '0')} sec`;
}
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopTimer();
  } else {
    startTimer();
  }
});
window.onload = () => {
  document.getElementById("timer").innerText = formatTime(totalSeconds);
  startTimer();
};