function expandHeart() {
    var heart = document.getElementById("heart");
    heart.classList.add("expanded");
    
    
   setTimeout(function() {
     window.location.href = "/acceuil.html";
  }, 5000);
  }
  