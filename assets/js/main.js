//hide img when scroll - nav main
window.onscroll = function() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    document.getElementById("brand-img").style.display = "none"; //hide avatar 
    document.getElementById("main-nav").style.top = "0px";
    document.getElementById("brand-txt").style.display = "block";//show text
  } else {
    document.getElementById("brand-img").style.display = "block";
    document.getElementById("brand-txt").style.display = "none";
  }
}

// show detail when mouseover skill
function showDetails(idDetail,idSkill){
  document.getElementById(idDetail).style.height = "3rem";
  document.getElementById(idSkill).style.margin = "250px";
}
