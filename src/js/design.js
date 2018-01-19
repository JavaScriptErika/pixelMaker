var gridColumns = document.getElementById('columns');
var gridRows = document.getElementById('rows');
var gridButton = document.getElementById('grid-btn');
var gridTable = document.getElementById('grid-canvas');
var tableRows = document.getElementsByTagName('tr');




var makeGrid = () => {
    let gridRowsValue = gridRows.value;
    let gridColumnsValue = gridColumns.value;
    tableRows.length !== 0 ? removeRows() : addRowsAndColumns(gridRowsValue, gridColumnsValue);
}


var removeRows = () => {
    while(tableRows.length > 0) {
        tableRows[0].remove();
    }
    makeGrid();
}

var addRowsAndColumns = (gridRowsValue, gridColumnsValue) => {
    let addRow;
    for(let row = 0; row < gridRowsValue; row++) {
        addRow = gridTable.insertRow(row);
        for(let columns = 0; columns < gridColumnsValue; columns++) {
            addRow.insertCell(columns);
        }
    }
}

gridButton.addEventListener('click', makeGrid, false);