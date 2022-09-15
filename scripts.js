const gameBoard = (() => {

	let move = 0;

	const displayMessage = document.querySelector(".display-message");
	const squares = document.querySelectorAll(".square");

	const disableAllSquares = () => {
		squares.forEach(square => {
			square.disabled = true;	
		})
	}

	const gamePlay = (() => {
		const sq1 = document.querySelector("#sq-1");
		const sq2 = document.querySelector("#sq-2");
		const sq3 = document.querySelector("#sq-3");
		const sq4 = document.querySelector("#sq-4");
		const sq5 = document.querySelector("#sq-5");
		const sq6 = document.querySelector("#sq-6");
		const sq7 = document.querySelector("#sq-7");
		const sq8 = document.querySelector("#sq-8");
		const sq9 = document.querySelector("#sq-9");

		if (sq1.value === "X" && sq2.value === "X" && sq3.value === "X" ||
			sq4.value === "X" && sq5.value === "X" && sq6.value === "X" ||
			sq7.value === "X" && sq8.value === "X" && sq9.value === "X"	||
			sq1.value === "X" && sq4.value === "X" && sq7.value === "X"	||
			sq2.value === "X" && sq5.value === "X" && sq8.value === "X"	||
			sq3.value === "X" && sq6.value === "X" && sq9.value === "X"	||
			sq1.value === "X" && sq5.value === "X" && sq9.value === "X"	||
			sq3.value === "X" && sq5.value === "X" && sq7.value === "X") {
			displayMessage.textContent = "X's won!";
			disableAllSquares()
		} else if 
		   (sq1.value === "O" && sq2.value === "O" && sq3.value === "O" ||
			sq4.value === "O" && sq5.value === "O" && sq6.value === "O" ||
			sq7.value === "O" && sq8.value === "O" && sq9.value === "O" ||
			sq1.value === "O" && sq4.value === "O" && sq7.value === "O" ||
			sq2.value === "O" && sq5.value === "O" && sq8.value === "O" ||
			sq3.value === "O" && sq6.value === "O" && sq9.value === "O" ||
			sq1.value === "O" && sq5.value === "O" && sq9.value === "O" ||
			sq3.value === "O" && sq5.value === "O" && sq7.value === "O") {
			displayMessage.textContent = "O's won!";
			disableAllSquares()
		} else if (move === 9) {
			displayMessage.textContent = "Tie!";
		}		
	});

    const displayMoves = (() => {    
        squares.forEach(square =>         
            square.addEventListener("click", () => {
                move +=1;
                if (move % 2 !== 0) {
                    square.textContent = "X";
					displayMessage.textContent = "O's turn!";
					square.setAttribute("value", "X")
                    square.disabled = true;
					gamePlay();
                } else {
                    square.textContent = "O";  
					displayMessage.textContent = "X's turn!";
					square.setAttribute("value", "O")
                    square.disabled = true;
					gamePlay();
                }             
            })
        );
    })();
    
    const clearButton = (() => {
        const clearBoardButton = document.querySelector(".clear-board");

        clearBoardButton.addEventListener("click", () => {
            squares.forEach(square => {
                square.disabled = false;
                square.textContent = "";
				square.setAttribute("value", "")
				displayMessage.textContent = "X's turn!";
				move = 0;
            })
        });
    })();   

})();


const displayController = (() => {
})();


const players = (name, sign) => {
    return { name, sign };
};