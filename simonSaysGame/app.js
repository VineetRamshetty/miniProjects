let h2=document.querySelector("h2");

let gameSeq=[];
let userSeq=[];
let colors=["green", "yellow", "red", "blue"];

let started=false;
let level=0;
let highScore=0;

function flashBtn(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function nxtLevel(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*4);
    let randColor=colors[randIdx];
    let randBtn=document.querySelector(`.${randColor}Btn`);
    flashBtn(randBtn);
    gameSeq.push(randColor);
}

document.addEventListener("keydown", function(){
    if(!started){
        console.log("game started");
        started=true;
        nxtLevel();
    }
});

function reset(){
    gameSeq=[];
    userSeq=[];
    level=0;
    started=false;
}

function gameOver(){
    h2.innerHTML=`GAME OVER! Your score was ${level} <br> Press any key to restart`;
    let body=document.querySelector("body");
    body.style.backgroundColor="red";
    setTimeout(function(){
        body.style.backgroundColor="white";
    }, 150);
    if(level>highScore){
        highScore=level;
        let h3=document.querySelector("h3");
        h3.innerText=`High Score: ${highScore}`;
    }
    reset();
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(idx===level-1){
            setTimeout(nxtLevel, 1000);
        }
    }
    else{
        gameOver();
    }
}

function btnPress(){
    flashBtn(this);
    let userColor=this.id;
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let btns=document.querySelectorAll(".btn");
for(btn of btns){
    btn.addEventListener("click", btnPress);
}