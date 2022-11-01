generateGrid();
function generateGrid(){
    const container = document.querySelector('.container');
    const containerSize = container.style.width;
    console.log(containerSize);
    let numOfSide = 60;
    let cellSize = (500-(numOfSide*2))/numOfSide;
    for(let i = 0; i < numOfSide*numOfSide; i++)
    {
        const grid = document.createElement('div');
        grid.classList.add('content');
        grid.style.cssText = `background-color: white; width: ${cellSize}px; height: ${cellSize}px; border-style: solid; border-color: black; border-width: 1px;`;
        container.appendChild(grid);  
    }

}

const grids = document.querySelectorAll('.content')
grids.forEach(grid => grid.addEventListener('mousedown', function (){
    grid.style.backgroundColor = 'blue';
}))
grids.forEach(grid => grid.addEventListener('mouseenter', function (e) {
    if (e.buttons)
    {
        grid.style.backgroundColor = 'blue';
    }
}));


 //call to generate a new grid
//mouseHover();
//mouseDown();
/*
if mouse is down inside of a square, change the color of that square.
if mouse is still down and move to another square, change the color of the new square.


*/