const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')
  
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  /* Close */
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

/* Set the width of the sidebar to 250px (show it) */
function openSideNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeSideNav() {
  document.getElementById("mySidepanel").style.width = "0";
}