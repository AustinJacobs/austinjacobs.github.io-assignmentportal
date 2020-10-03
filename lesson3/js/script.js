function setActive() {
    linkObj = document.getElementById('nav').getElementsByTagName('a');
    for(i=0;i<linkObj.length;i++) { 
      if(document.location.href.indexOf(linkObj[i].href)>=0) {
        linkObj[i].classList.add("active");
      }
    }
  }
  
  window.onload = setActive;

document.getElementById("last-update").innerHTML = document.lastModified;
document.getElementById("copyright-year").innerHTML = (new Date().getFullYear());