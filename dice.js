
var randomnumber1=Math.floor(Math.random()*6)+1;
var randomnumber2=Math.floor(Math.random()*6)+1;
var randomdiceimage1= "D:\Udemy-Web Development\Dicee Challenge - Starting Files\Dicee Challenge - Starting Files\images\dice"+randomnumber1+".png";
var randomdiceimage2= "D:\Udemy-Web Development\Dicee Challenge - Starting Files\Dicee Challenge - Starting Files\images\dice"+randomnumber2+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomdiceimage1);
document.querySelectorAll("img")[1].setAttribute("src",randomdiceimage2);
document.querySelectorAll("img")[0].setAttribute("alt",randomnumber1);
document.querySelectorAll("img")[1].setAttribute("alt",randomnumber2);
if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{randomnumber1=randomnumber2
    document.querySelector("h1").innerHTML="Draw";
}