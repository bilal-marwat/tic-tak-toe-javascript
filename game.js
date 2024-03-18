let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let msg = document.querySelector(".msg");
let newGameBtn = document.querySelector(".new-game");
let msgContainer = document.querySelector(".msg-container");
let turn0 = true; //playerX , PlayerO

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetGame = () => {
    turnO =  true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener('click', () =>{
        console.log("box was clicked");
       if(turn0){
        box.innerText = "O";
        box.style = "color: red";
        turn0 = false;
       }else{
        box.innerText = "X";
        box.style = "color: blue";
        turn0 = true;
       }
       box.disabled = true;
       checkWinner();
    })
})

let disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
let enabledBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `congratulation ${winner} you won`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

const checkWinner = () => {
    for(let condition of winningConditions){
    let position1Value = boxes[condition[0]].innerText;
    let position2Value = boxes[condition[1]].innerText;
    let position3Value = boxes[condition[2]].innerText;
    if(position1Value != "" && position2Value != "" && position3Value != ""){
        if(position1Value == position2Value && position2Value == position3Value){
            console.log("winner", position1Value);
            showWinner(position1Value);
        }
    }
}
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
