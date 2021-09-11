const menu = document.querySelector("h2");
//const close = document.querySelector("h3");
var side = document.querySelector("aside");

var first = document.getElementsByTagName("hr");

menu.addEventListener("click", function(){
    
    if(side.style.right !== "0px"){

   side.style.right="0px";
    first[0].style.animation="myf 1s ease";
    first[1].style.visibility="hidden";
    first[2].style.animation="mys 1s ease";
    setTimeout(function(){
    first[0].style.animationPlayState="paused";
    first[2].style.animationPlayState="paused";
    } ,500);
   }
    else{
    side.style.right="-250px";
    first[0].style.animationPlayState="running";
    first[2].style.animationPlayState="running";
    first[1].style.visibility="visible";
        setTimeout(function(){
           first[0].style.animation="start .5s ease";
           first[2].style.animation="startt .5s ease";
         } ,50);
     
   } 
});













