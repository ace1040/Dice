console.log("Yo");
var random1=Math.floor(Math.random() * 6) + 1;
var random2=Math.floor(Math.random() * 6) + 1;
var img1="dice" +random1 +".png";
var img2="dice" +random2 +".png";
function clickbtn() {
    let sr1="images/" + img1;
    let src2="images/" +img2;
    if(random1>random2){
        document.querySelector(".heading").innerHTML="Player 1 Wins !";
        document.querySelector("#img1").setAttribute("src",sr1);
        document.querySelector("#img2").setAttribute("src",src2);
    }
    else if(random2>random1){
        document.querySelector(".heading").innerHTML="Player 2 Wins !";
        document.querySelector("#img1").setAttribute("src",sr1);
        document.querySelector("#img2").setAttribute("src",src2);
    }
    else{
        document.querySelector(".heading").innerHTML="Draw !";
        document.querySelector("#img1").setAttribute("src",sr1);
        document.querySelector("#img2").setAttribute("src",src2);
    }
}
