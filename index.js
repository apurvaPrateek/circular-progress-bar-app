let circle = document.querySelector("circle");
let text = document.querySelector(".inner span");


function AnimateProgressBar(){
    var timeRun=0;
    var interval = setInterval(function(){
        timeRun +=1;
        text.innerHTML=timeRun;
        if(timeRun==65){
            clearInterval(interval);
        }
    },2000/65);
    
}

document.addEventListener("DOMContentLoaded", AnimateProgressBar)