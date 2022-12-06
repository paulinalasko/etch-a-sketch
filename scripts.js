let color = 'black';
    
   //Loops and creates grid
function createGrid(size) {
    let board = document.querySelector('.grid');
    let createDivs = board.querySelectorAll('div');
    createDivs.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`


      for (let i = 0; i < size * size; i++) {
          let createDiv = document.createElement('div');
          createDiv.style.backgroundColor = '#eee';
          board.insertAdjacentElement('beforeend', createDiv);
          
        //Chooses color
        createDiv.addEventListener('mouseover', colorSquare);
    }   
}   
createGrid(16);

function changeSize(input) {
    if ((input >= 2) && (input <= 100)) {
        createGrid(input);
    } else {
        console.log('Error, try entering a number between 2 to 100.');
    }
}  

    
function changeColor (choice) {
    color = choice;
    }

function colorSquare() {
    if (color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}
    
function resetBoard() {
    let board = document.querySelector('.grid');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = '#eee');
}





