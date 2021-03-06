// Set the current page to active and assign an active color to it. 
function setActive() {
    linkObj = document.getElementById('nav').getElementsByTagName('a');
    for(i=0;i<linkObj.length;i++) { 
      if(document.location.href.indexOf(linkObj[i].href)>=0) {
        linkObj[i].classList.add("active");
      }
    }
  }
  
  window.onload = setActive;

// Hamburger Button
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')
  
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// Footer date display.
let d = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

document.getElementById("current-date").innerHTML = days[d.getDay()] + ", " + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();

// Copyright year for the footer.
document.getElementById("copyright-year").innerHTML = (new Date().getFullYear());