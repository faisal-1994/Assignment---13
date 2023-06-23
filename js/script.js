
function dark(){
    let back = document.querySelector(".back");
    let dark = document.querySelector(".dark");
    let white = document.querySelector(".normal");
    let h2 = document.querySelector(".container h2");
    dark.style.backgroundColor = "black";
    dark.style.visibility = "hidden";
    white.style.visibility="visible";
    white.style.backgroundColor="white"
    back.style.backgroundColor = "black";
    h2.style.backgroundColor= "white";
    h2.style.color= "black";
  
    
  }
  
  function light(){
    let back = document.querySelector(".back");
    let dark = document.querySelector(".dark");
    let white = document.querySelector(".normal");
    let h2 = document.querySelector(".container h2");
    dark.style.backgroundColor = "white";
    dark.style.visibility = "visible";
    white.style.visibility="hidden";
    dark.style.backgroundColor="black"
    back.style.backgroundColor = "white";
    h2.style.backgroundColor= "black";
    h2.style.color= "white";
  
  }