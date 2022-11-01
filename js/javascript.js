
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
        grid.addEventListener('mouseover', function(){
            grid.style.backgroundColor = "blue";
        })
        container.appendChild(grid);
        
    }
    console.log(container);
}
/*
function Hover() {
    const grids = document.querySelectorAll('.content');
    grids.forEach(grid => grid.addEventListener('mouseover', function () {
        console.log(grids);
    }));

    const len = grids.length;
    for (let i = 0; i < len; i++)
    {
        grids[i].addEventListener('mouseover', () => {
            grids[i].style.backgroundColor = "blue";
            console.log(grids);
        })
            
    }
}
*/
//Hover();


generateGrid();
