let move=document.querySelectorAll("#moves");
let results=document.querySelector(".result");
let game=document.querySelector(".mains")
let msg=document.querySelector("#message");
let rst=document.querySelector("#reset")
let newGames=document.querySelector("#newgame")
let fMove=true;
let count=0
let cMoves=[[0,1,2],[0,3,6],[0,4,8],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[2,4,6]]

move.forEach((moves)=>{
    game.classList.remove("hide")
    moves.addEventListener('click',()=>{
    if(fMove){
        moves.innerHTML="X";
        fMove=false;
    }
    else{
        moves.innerHTML="O";
        fMove=true;
    }
    moves.disabled=true;
    let winners=winner();
    count++
    if(count==9&&!winners){
        gamedraw();        
    }
});
});
const gamedraw=()=>{
    msg.innerHTML="it's a tie! Try again";
    results.classList.remove("hide");
    disable();
}

 const winner=()=>{
   for(let value of cMoves){
    let first=move[value[0]].innerHTML;
    let second=move[value[1]].innerHTML;
    let third=move[value[2]].innerHTML;
    if(first!=""&&second!=""&&third!=""){
        if(first===second&&second===third){
            showWinner(first);
    }   
}
 }
}

const showWinner=(won)=>{
        msg.innerHTML=`${won} won the match` 
        results.classList.remove("hide");
        disable()
        game.classList.add("hide")
}

const disable=()=>{
    move.forEach((moves)=>{
        moves.disabled=true;
        })
}

const resetGame=()=>{
    fMove=true;
    count=0;
    move.forEach((moves)=>{
        moves.innerHTML="";
        moves.disabled=false;
        });
     results.classList.add("hide");
}

const newGame=()=>{
    count=0;
    resetGame();
    game.classList.remove("hide")
}

reset.addEventListener('click',resetGame)
newGames.addEventListener('click',newGame)