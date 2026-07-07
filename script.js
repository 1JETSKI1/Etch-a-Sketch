function createGrid(size) {
    const totalSquares = size * size;
    const squareSize = 960 / size;
    const container = document.querySelector('.grid-container');
    container.innerHTML = '';
    for (let i = 0; i < totalSquares; i++) {
        const gridItem = document.createElement('div');
        container.appendChild(gridItem);
        gridItem.style.width = squareSize + "px";
        gridItem.style.height = squareSize + "px";
        gridItem.addEventListener('mouseover', function (e) {
            e.target.classList.add('hovered');
        });
    }
}

createGrid(16);

const button = document.querySelector('#reset-button');
button.addEventListener('click', function() {
    const size = parseInt(prompt("How many squares per side?"), 10);
    if (isNaN(size) || size > 100) {
        alert("Please pick a number under 100");
        return;
    }
    createGrid(size);
    
});
