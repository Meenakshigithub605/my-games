console.log("Welcome to tic tac toe");
let click=new Audio("resources/click.mp3");
let wingame=new Audio("resources/win.mp3")
let turn="X";
let gamend=false;

// function to change the turn 
const changeTurn=()=>{
    return turn==="X"?"O":"X";
}

//function to check who wins 
const checkWin=()=>{
    let boxtexts=document.getElementsByClassName('boxtext');
    let wins=[
        //last 3 are to cut when someone wins
        //horizontal wins
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        //vertical wins
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        //diagonal wins
        [0,4,8,5,15,45],
        [2,4,6,5,15,135]
    ];
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText)&&(boxtexts[e[1]].innerText===boxtexts[e[2]].innerText)&&(boxtexts[e[0]].innerText!=="")){
            document.querySelector('.info').innerText=boxtexts[e[0]].innerText+" Won:) " ;
            gamend=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="150px";
            wingame.play();
            if(screen.width < 800) {
                document.querySelector(".line").style.transform=`translate(${e[3]*2}vw,${e[4]*2}vw) rotate(${e[5]}deg)`;
                document.querySelector(".line").style.width="40vw";
                console.log("dwds")
              }else {
                document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
                document.querySelector(".line").style.width="20vw";
              }
            console.log(screen.width);

        }
    })
}

//Main Game Logic starts here
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let spanboxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(spanboxtext.innerText===''){
            spanboxtext.innerText=turn;
            turn=changeTurn();
            click.play();
            checkWin();
            if(!gamend){
                document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
            }
            
        }

    })
})

//add on click listener to reset btn
reset.addEventListener('click',()=>{
    let bt=document.querySelectorAll('.boxtext');
    Array.from(bt).forEach(element=>{
        element.innerText="";
        wingame.pause();
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";
    });
    turn="X";
    gamend=false;
    document.querySelector(".line").style.width="0vw";
    document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
})