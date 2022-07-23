let btn=document.querySelector("#btn") ;
let div_color=document.querySelector(".div") ;
let colors=["red","blue","green","gray","black","brown"] ;
let i=0 ;
btn.addEventListener("click",function(){
    div_color.style.background=colors[i];
    i++
    if(i==colors.length)
     i=0 ;


})