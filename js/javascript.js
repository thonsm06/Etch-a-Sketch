let color = 'black';

window.addEventListener('DOMContentLoaded', function () { //initial grid at start
    generateGrid(10);
});

function generateGrid(numOfCell){
    const container = document.querySelector('.container');
    const containerStyle = getComputedStyle(container);
    let containerSize = containerStyle.getPropertyValue('width');
    containerSize = containerSize.replace(/[a-zA-Z]/g, ''); //strip all letters, keeping numbers for board size
    container.replaceChildren();
    let numOfSide = numOfCell;
    let cellSize = (containerSize-(numOfSide*2))/numOfSide;
    for(let i = 0; i < numOfSide*numOfSide; i++)
    {
        const grid = document.createElement('div');
        grid.classList.add('content');
        grid.style.cssText = `background-color: grey; width: ${cellSize}px; height: ${cellSize}px; border-style: solid; border-color: white; border-width: 1px;`;
        
        container.appendChild(grid);  
    }
    const grids = document.querySelectorAll('.content');
    grids.forEach(grid => grid.addEventListener('mousedown', drawing));
    color = 'black';
    currentColor.style.backgroundColor = color;
}

const container = document.querySelector('.container');
container.addEventListener('mousedown', function() {
    const grids = document.querySelectorAll('.content');
    grids.forEach(grid => grid.addEventListener('mouseenter', drawing));
})
document.addEventListener('mouseup', function(){
    const grids = document.querySelectorAll('.content');
    grids.forEach(grid => grid.removeEventListener('mouseenter', drawing))
})

function drawing(e){
    this.style.backgroundColor = color;
}

const changeSize = document.querySelector('.sizeButton'); //change number of cell
changeSize.addEventListener('click', checkCell);

function checkCell(){
    let numOfCell = prompt("Enter number of cell");
    if (numOfCell == null || numOfCell == "")
    {
        return;
    }
    else if (numOfCell > 100)
    {
        checkCell();
    }
    else
    {
        generateGrid(numOfCell);
    }
};


const currentColor = document.querySelector('.currentColor');
const colorInput = document.querySelector('.randomColorButton');
colorInput.addEventListener('mousedown', randomColor);
function randomColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    console.log(r);
    color = `rgb(${r}, ${g}, ${b})`;
    currentColor.style.backgroundColor = color;
    
}