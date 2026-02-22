// Default set to normal mode
let currentMode = "default";

// Create grid from given size
const container = document.querySelector(".sketch-container");

function draw(e) {
    if (currentMode === "rgb") {
        e.target.style.backgroundColor = getRandomColor();
    } else {
        e.target.style.backgroundColor = '#333';
    }
}

function createInteractiveGrid(size) {
    let cellsTotal = size * size;
    for (let i = 0; i < cellsTotal; i++) {
        const cell = document.createElement('div');
        cell.classList.add("grid-cell");

        const cellSize = 100 / size;
        cell.style.flex = `0 0 ${cellSize}%`;
        cell.style.height = `${cellSize}%`;

        cell.addEventListener("mousedown", (e) => {
            e.preventDefault();
            draw(e);
        });
        cell.addEventListener("mouseover", (e) => {
            if (e.buttons === 1) {
                draw(e);
            }
        });

        container.appendChild(cell);
    }
}

const clearButton = document.getElementById("clear-button");

// Clear cells
function clearCells() {
    container.innerHTML = "";
    createInteractiveGrid(sliderGrid.value);
}
clearButton.addEventListener("click", clearCells);

// Grid update
const sliderGrid = document.getElementById("myRange");
const displayGridSize = document.getElementById("size-display");

function updateGridSize() {
    const size = sliderGrid.value;
    displayGridSize.textContent = `${size}x${size}`;
    container.innerHTML = "";
    createInteractiveGrid(size);
}

sliderGrid.addEventListener("input", updateGridSize);

// Get random RGB color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Mode toggle logic
const modeButton = document.getElementById("mode-button");
modeButton.addEventListener("click", () => {
    if (currentMode === "default") {
        currentMode = "rgb";
        modeButton.textContent = "RGB";
        modeButton.classList.add("rgb-mode");
    } else {
        currentMode = "default";
        modeButton.textContent = "Default";
        modeButton.classList.remove("rgb-mode");
    }
});

// Execution
const defaultGridSize = 16;
createInteractiveGrid(defaultGridSize);