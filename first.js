let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choise");
const mess=document.querySelector("#message");
const userpara=document.querySelector("#user");
const comppara=document.querySelector("#computer");
const gencompchoise=()=>{
let op=["rock","paper","scissors"];
 const randidx=Math.floor(Math.random()*3);
 return op[randidx];
};
drawGame=()=>{
    console.log("game was draw.");
    message.innerText="game draw try again!";
    message.style.background="black"
};
showwinner=(userWin)=>{
if(userWin){
    userScore++;
    userpara.innerText=  userScore;
    message.innerText="you win";
    message.style.background="green";
}
else{
    compScore++;
    comppara.innerText=compScore;
    message.innerText="you lost";
    message.style.background="red";
}
}


const playGame=(userchoise)=>{
console.log( "userchoise",userchoise);
const compchoise=gencompchoise();
console.log( "compchoise",compchoise);
if(userchoise === compchoise){
    drawGame();
}else{
 let   userWin=true;
 if(userchoise==="rock"){
    userWin= compchoise==="paper"?false:true;
 }else if(userchoise===paper){
    userWin= compchoise==="scissors"?false:true;
 }else{
    userWin= compchoise==="rock"?false:true;
 }
 showwinner( userWin)
}
};

choices.forEach((choise)=>{
    choise.addEventListener("click",()=>{
        const userchoise=choise.getAttribute("id")
       playGame(userchoise);
    });
});








