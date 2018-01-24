(() => {
    var colorInput = document.getElementById('color')
    var gridButton = document.getElementById('grid-btn')
    var gridColumns = document.getElementById('columns')
    var gridRows = document.getElementById('rows')
    var gridTable = document.getElementById('grid-canvas')
    var tableRows = document.getElementsByTagName('tr')

    var clearAndMakeGrid = () => {
        let gridRowsInputValue = gridRows.value
        let gridColumnsInputValue = gridColumns.value
        tableRows.length !== 0 ? clearGrid() : makeGrid(gridRowsInputValue, gridColumnsInputValue)
    }

    var clearGrid = () => {
        while(tableRows.length > 0) {
            tableRows[0].remove()
        }
        clearAndMakeGrid()
    }

    var makeGrid = (gridRowsInputValue, gridColumnsInputValue) => {
        let addRow
        for(let row = 0; row < gridRowsInputValue; row++) {
            addRow = gridTable.insertRow(row)
            for(let columns = 0; columns < gridColumnsInputValue; columns++) {
                addRow.insertCell(columns)
            }
        }
    }

    var colorPicker = (e) => {
        let colorInputValue = colorInput.value
        e.target.nodeName === 'TD'? e.target.style.backgroundColor = colorInputValue : ''
    }

    window.addEventListener('load', clearAndMakeGrid, colorPicker, false)
    gridButton.addEventListener('click', clearAndMakeGrid, false)
    gridTable.addEventListener('click', colorPicker, false)
    colorInput.addEventListener('input', colorPicker, false)
})();