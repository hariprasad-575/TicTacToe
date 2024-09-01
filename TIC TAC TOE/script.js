let boxes=document.querySelectorAll(".box");
let resetBtn=document.getElementById("reset")
let msg=document.getElementById("msgcon")
let newBtn=document.getElementById("newgame")
let msgCOnt=document.querySelector(".msg")

let turnO=true;
console.log("hello")
const winpat=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
let xt=document.getElementById("xt");
let ot=document.getElementById("ot");
ot.style.visibility="visible";
let i=9
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Button clicked")
        if(turnO){
            box.innerText="X";
            box.style.color="#1D3557"
            xt.style.visibility="visible"
            ot.style.visibility="hidden"
            turnO=false;
            
        }
        else{
            
            box.innerText="O";
            box.style.color="#E63946"
            ot.style.visibility="visible"
            xt.style.visibility="hidden"
            turnO=true;
            
        }
        i--;
        console.log(i)
        box.disabled=true;
        checkBruh();
    })
})
const addbox=()=>{
    i=9
    turnO=true;
    enableBoxes();
    msgCOnt.classList.add("hide")
    ot.style.visibility="visible"
}
const disableBoxes=()=>{
    i=9
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const display=(val)=>{
    msg.innerText=`Winner is ${val}`;
    ot.style.visibility="hidden"
    xt.style.visibility="hidden"
    msgCOnt.classList.remove("hide");
    
    disableBoxes();
}
const checkBruh=()=>{
    winpat.forEach((pat)=>{
        let v1=boxes[pat[0]].innerText;
        let v2=boxes[pat[1]].innerText;
        let v3=boxes[pat[2]].innerText;
        if(v1!="" && v2!="" && v3!=""){
            if(v1===v2 && v2===v3){
                console.log("winner")
                display(v1)
            }
        }
        if(i==0){
            i=9
            msg.innerText=`Match drawn Start a new game bois`;
            ot.style.visibility="hidden"
            xt.style.visibility="hidden"
            msgCOnt.classList.remove("hide");
        }
    })
}

newBtn.addEventListener("click",addbox);
resetBtn.addEventListener("click",addbox);

