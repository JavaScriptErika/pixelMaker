(function iife() {

// set the size of the cross stitch canvas as an N by M grid with the makeGrid() function
const makeGrid = () => {
    var gridColumns = document.getElementById('columns').value;
    var gridRows = document.getElementById('rows').value;
    var gridButton = document.getElementById('grid-btn');
    var gridTable = document.getElementById('grid-canvas')
    var row;

    gridButton.addEventListener('click', function(){
        for(let i = 0; i < gridRows; i++) {
            row = gridTable.insertRow(i)
            for(let j = 0; j < gridColumns; j++) {
                row.insertCell(j)
            }
        }
    });
    console.log(gridColumns, gridRows)
}

makeGrid();

})();