generateGrid();
function generateGrid(){
    const container = document.querySelector('.container');
    container.style.width = "320px";
    container.style.height = "320px";
    container.style.display = "flex";
    container.style.flexDirection = "row";
    container.style.flexWrap = 'wrap';

    for(let i = 0; i < 256; i++)
    {
        const grid = document.createElement('div');
        grid.classList.add('content');
        grid.style.backgroundColor = 'red';
        grid.style.cssText = "background-color: pink; width: 20px; height: 20px; border-style: solid; border-color: black; border-width: 1px;";
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