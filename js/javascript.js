
function generateGrid(){
    const container = document.querySelector('.container');
    container.style.width = "320px";
    container.style.height = "320px";
    container.style.display = "flex";
    container.style.flexDirection = "row";
    container.style.flexWrap = 'wrap';
    
    for(let i = 0; i < 16*16; i++)
    {
        const grid = document.createElement('div');
        grid.classList.add('content');
        grid.style.backgroundColor = 'red';
        grid.style.cssText = "background-color: pink; width: 20px; height: 20px";
        container.appendChild(grid);
        
    }
    console.log(container);
}

generateGrid();
