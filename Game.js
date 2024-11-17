let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;  // playerO's turn, then playerX's turn

// Winning patterns
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
};

// Add event listeners to each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText !== "") return; // Ignore click if box is already filled

        if (turnO) { // Player O's turn
            box.innerText = "O";
            turnO = false;
        } else { // Player X's turn
            box.innerText = "X";
            turnO = true;
        }
        
        box.classList.add("disabled");  // Disable box by adding the "disabled" class

        // Check if there's a winner after each move
        checkWinner();
    });
});

const disabledBoxes = () => {
    for (let box of boxes) {
        box.classList.add("disabled");  // Disable the box by adding the "disabled" class
    }
};

const enabledBoxes = () => {
    for (let box of boxes) {
        box.classList.remove("disabled");  // Enable the box by removing the "disabled" class
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;  // Fixed template literal
    msgContainer.classList.remove("hide");
};

// Check for a winner after every move
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                disabledBoxes();  // Disable all boxes once a winner is found
                return;  // Exit the function once a winner is found
            }
        }
    }
};

// Event listeners for the reset and new game buttons
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
