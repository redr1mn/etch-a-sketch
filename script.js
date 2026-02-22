const container = document.querySelector('.sketch-container');
const button = document.getElementById("clear-button");

function createInteractiveGrid(size) {
    let cellsTotal = size * size;
    for (let i = 0; i < cellsTotal; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');

        cell.addEventListener("mousedown", (e) => {
            e.preventDefault();
            cell.style.backgroundColor = '#333';
        });
        cell.addEventListener("mouseover", (e) => {
            if (e.buttons === 1) {
                cell.style.backgroundColor = '#333';
            }
        });

        container.appendChild(cell);
    }
}

function clearCells() {
    container.innerHTML = '';
    createInteractiveGrid(16);
}
button.addEventListener("click", clearCells);

// Execution
createInteractiveGrid(16);