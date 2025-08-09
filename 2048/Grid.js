
const GRID_SIZE = 4;
const CELL_SIZE = 20;
const CELL_GAP = 2;

// --cell-size: 20vmin;
// --grid-size: 4;
// --cell-gap: 2vmin;


export default class Grid {
    constructor(gridElement) {
        gridElement.style.setProperty("--grid-size", GRID_SIZE)
        gridElement.style.setProperty("--cell-size", `${CELL_SIZE}vmin`)
        gridElement.style.setProperty("--cell-gap", `${CELL_GAP}vmin`)
        createCellElements(gridElement)
    }
}

function createCellElements(gridElement) {
    const cells = []
    for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
        const cell = document.createCellElement()

    }
}