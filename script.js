console.log("Tic-Tac-Toe");
let music = new Audio('music.mp3');
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let isgameover = false;
let turn ="X";

const changeTurn = ()=>{
    return turn === "X"? "0" : "X";
}

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('box');
    console.log(boxtext.textContent);
    let wins =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    wins.forEach(e =>{
        console.log("e1=" ,boxtext[e[0]].textContent," e2=" ,boxtext[e[1]].textContent, " e3=" ,boxtext[e[2]].textContent);
        if(boxtext[e[0]].textContent !== ""  && boxtext[e[1]].textContent !== "" && boxtext[e[2]].textContent !== "" && (boxtext[e[0]].textContent === boxtext[e[1]].textContent) && (boxtext[e[2]].textContent === boxtext[e[1]].textContent)){
            if(boxtext[e[0]].textContent==="X"){
                document.querySelector('.turn').innerHTML=`<div class="turn green">X WON</div>`;
            }else{
                document.querySelector('.turn').innerHTML=`<div class="turn red">0 WON</div>`;
            }
            isgameover=true;
            if(isgameover){
                gameover.play();
                music.play();
                document.querySelector('.btn').getElementsByTagName('Button')[0].style.opacity=1;
                document.querySelector('.newbtn').getElementsByTagName('Button')[0].style.opacity=0;
                document.querySelector('.image').getElementsByTagName('img')[0].style.width="20vw";
                // console.log(opac);
            }
        }
    })
};


let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let box = element.querySelector('.textbox');
    element.addEventListener('click',(e)=>{
        // console.log(e.target.id);
        // console.log(e.target.textContent);
        if(e.target.textContent==''){
            e.target.textContent=turn;
            turn = changeTurn();
            audioturn.play();
            if(!isgameover){
                checkWin();
            }
            console.log("isgameover");
            if(!isgameover){
                console.log("checkwin");
                if(turn==="0"){
                document.querySelector('.turn').innerHTML=`<div class="turn red">TURN FOR 0</div>`;
                }
                else if(turn === "X"){
                    document.querySelector('.turn').innerHTML=`<div class="turn green">TURN FOR X</div>`;
                }
            }else{
                turn="";
            }
        }
    });
});

document.querySelector('.btn').addEventListener('click',()=>{
    window.location.reload();
});
document.querySelector('.newbtn').addEventListener('click',()=>{
    window.location.reload();
});

