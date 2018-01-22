var colorInput = document.getElementById('color');
var colorInputValue = colorInput.value;
var gridButton = document.getElementById('grid-btn');
var gridColumns = document.getElementById('columns');
var gridRows = document.getElementById('rows');
var gridTable = document.getElementById('grid-canvas');
var tableRows = document.getElementsByTagName('tr');

var makeGrid = () => {
    let gridRowsInputValue = gridRows.value;
    let gridColumnsInputValue = gridColumns.value;
    tableRows.length !== 0 ? clearGrid() : addRowsAndColumns(gridRowsInputValue, gridColumnsInputValue);
}

var clearGrid = () => {
    while(tableRows.length > 0) {
        tableRows[0].remove();
    }
    makeGrid();
}

var addRowsAndColumns = (gridRowsInputValue, gridColumnsInputValue) => {
    let addRow;
    for(let row = 0; row < gridRowsInputValue; row++) {
        addRow = gridTable.insertRow(row);
        for(let columns = 0; columns < gridColumnsInputValue; columns++) {
            addRow.insertCell(columns);
        }
    }
}

window.addEventListener('load', makeGrid, false);
gridButton.addEventListener('click', makeGrid, false);
colorInput.addEventListener('input', () => colorInputValue = colorInput.value, false);
gridTable.addEventListener('click', (e) => e.target.nodeName === 'TD'? e.target.style.backgroundColor = colorInputValue : '', false);