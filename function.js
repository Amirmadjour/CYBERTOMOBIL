const background_image = document.getElementById("hero-background");
const hero_cutter = document.getElementById("hero-cutter");
const characteristics = document.getElementById("characteristics");
const currentwidth = window.innerWidth;


background_image.style.width = currentwidth + "px";

hero_cutter.style.borderLeft = currentwidth + "px solid transparent";

if(currentwidth < 1280 && currentwidth > 1200) {
  background_image.style.backgroundSize = "80%";
}
else if(currentwidth <= 1200 && currentwidth > 1050) {
  background_image.style.backgroundSize = "90%";
}
else if(currentwidth <= 1050 && currentwidth > 950) {
  background_image.style.backgroundSize = "100%";
}
else if(currentwidth <= 950 && currentwidth > 850) {
  background_image.style.backgroundSize = "110%";
} 
else if(currentwidth <= 850 && currentwidth > 750) {
  background_image.style.backgroundSize = "120%";
}
else if(currentwidth <= 750 && currentwidth > 650) {
  background_image.style.backgroundSize = "130%";
}
else if(currentwidth <= 650 && currentwidth > 550) {
  background_image.style.backgroundSize = "180%";
}
else if(currentwidth <= 550 && currentwidth > 450) {
  background_image.style.backgroundSize = "200%";
  background_image.style.backgroundPositionX = "50%";
}
else if(currentwidth <= 450 && currentwidth > 350) {
  background_image.style.backgroundSize = "160%";
}
else {
  background_image.style.backgroundSize = "300%";
}


if(currentwidth > 554) {
  document.getElementById("nav-bar").style.width = currentwidth - 144 + "px";
  document.getElementById("ready-social").style.width = currentwidth - 144 + "px";
  document.getElementById("email-privacy-terms").style.width = currentwidth - 144 + "px";
}
