let user=0;
let comp=0;
const msg=document.querySelector(".make-move");
const choices=document.querySelectorAll(".choice");
const userpara=document.querySelector(".self");
const compara=document.querySelector(".comp");
const drew=() =>{
    console.log("draw");
    msg.innerText="Draw.play again!";
    msg.style.backgroundColor = "blanchedalmond";
};
const gencomp= () => {
    let option=["paper","rock","sciessor"];
    let num=Math.floor(Math.random()*3);
    return option[num];

};

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
     const userchoice=choice.getAttribute("id");
 playgame(userchoice);
    });
 });


const showWinner= (userwin,userchoice,comchoice) => {
if(userwin){
    console.log("win");
    user++;
    userpara.innerText=user;
    msg.innerText=`you win ! ${userchoice} beats ${comchoice}`;
    msg.style.backgroundColor="green";
}else{
    console.log("lose");
    comp++;
msg.innerText=`you lose! ${comchoice} beats ${userchoice}`;
compara.innerText=comp;
msg.style.backgroundColor = "red";
}
};

const playgame=(userchoice) => {
    console.log(userchoice);
    let comchoice=gencomp();
    console.log(comchoice);
    if(userchoice===comchoice)
        drew();
    else{
        let userwin=true;
        if(userchoice===rock){
            userwin=comchoice==="paper" ? false:true;
        }
       else if(userchoice===paper){
            userwin=comchoice==="sciessor" ? false:true;
        }
        else{
            userwin=comchoice==="rock" ? false:true;
        }
    
showWinner(userwin,userchoice,comchoice);
}
};


