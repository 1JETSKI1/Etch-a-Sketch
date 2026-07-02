function createGrid() {
    //grab container
    const container = document.querySelector('.grid-container');
    //loop 256 times
    for (let i = 0; i < 256; i++) {
        //create div each iteration
        const gridItem = document.createElement('div');
        container.appendChild(gridItem); 
        gridItem.addEventListener('mouseover', function (e) {
            e.target.classList.add('hovered');
        })
    }

}

createGrid();




