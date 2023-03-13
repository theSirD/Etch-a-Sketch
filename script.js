
function drawMainGrid(sieOfGrid) {
    let container = document.createElement("div");
    container.classList.add('flex-container');
    container.classList.add('grid');
    
    document.body.appendChild(container);
    
    for (let i = 0; i < sieOfGrid; i++) {
        let row = document.createElement("div");
        row.classList.add('flex-container');
        row.classList.add('row');
    
        for (let j = 0; j< sieOfGrid; j++) {
            square = document.createElement("div");
            square.classList.add('square');
    
            row.appendChild(square);
        }
    
        container.appendChild(row);
    }
     
}

function getSizeOfMainGrid() {
    let grid = document.querySelector(".grid");
    let amountOfRows = grid.childElementCount;

    return amountOfRows;
}

function drawGridOnButton(sizeOfMainGrid) {
    let container = document.querySelector(".controls");


    let grid = document.createElement("div");
    grid.classList.add('flex-container');
    grid.classList.add('grid-button');
    container.appendChild(grid);

    document.body.prepend(container);
    
    let sizeOfGridButton;
    if (sizeOfMainGrid <= 32) sizeOfGridButton = 2;
    else sizeOfGridButton = 4;

    for (let i = 0; i < sizeOfGridButton; i++) {
        let row = document.createElement("div");
        row.classList.add('flex-container');
        row.classList.add('row');
    
        for (let j = 0; j< sizeOfGridButton; j++) {
            square = document.createElement("div");
            square.classList.add('button-square');

            if (i %2 == 0) {
                if (j%2==0) {
                    square.style.backgroundColor ='black';
                }
            } else {
                if (j%2!=0) {
                    square.style.backgroundColor ='black';
                }
            }
            row.appendChild(square);
        }
    
        grid.appendChild(row);
    }


    resizeMainGrid();

}

function changeColorOfSquares() {
let squares = document.querySelectorAll(".square");
squares.forEach(square => {
    square.addEventListener("mouseover", e => {
        e.target.style.backgroundColor = "black";
    })
})
}

function drawControlsMenu() {
    let container = document.createElement("div");
    container.classList.add('flex-container');
    container.classList.add('controls');
    document.body.appendChild(container); 
}

function resizeMainGrid() {
    let gridButton = document.querySelector(".grid-button");
    gridButton.addEventListener('click', function() {
        sizeOfMainGrid = prompt("Enter number of squares (64 - max)");
        if (sizeOfMainGrid == "") sizeOfMainGrid = 1;
        else if (sizeOfMainGrid >64) sizeOfMainGrid = 64;
        document.querySelector(".grid").remove();
        drawMainGrid(sizeOfMainGrid);

        changeColorOfSquares();
        
        document.querySelector(".grid-button").remove();
        drawGridOnButton(sizeOfMainGrid);
    });
}

drawMainGrid(32);
changeColorOfSquares();
drawControlsMenu();


let sizeOfMainGrid = getSizeOfMainGrid();
drawGridOnButton(sizeOfMainGrid);

