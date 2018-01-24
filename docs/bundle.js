(function () {
  var colorInput = document.getElementById("color");
  var gridButton = document.getElementById("grid-btn");
  var gridColumns = document.getElementById("columns");
  var gridRows = document.getElementById("rows");
  var gridTable = document.getElementById("grid-canvas");
  var tableRows = document.getElementsByTagName("tr");

  var clearAndMakeGrid = function clearAndMakeGrid() {
    var gridRowsInputValue = gridRows.value;
    var gridColumnsInputValue = gridColumns.value;
    tableRows.length !== 0 ? clearGrid() : makeGrid(gridRowsInputValue, gridColumnsInputValue);
  };

  var clearGrid = function clearGrid() {
    while (tableRows.length > 0) {if (window.CP.shouldStopExecution(1)){break;}if (window.CP.shouldStopExecution(1)){break;}
      tableRows[0].remove();
    }
    clearAndMakeGrid();
  };

  var makeGrid = function makeGrid(gridRowsInputValue, gridColumnsInputValue) {
    var addRow = void 0;
    for (var row = 0; row < gridRowsInputValue; row++) {if (window.CP.shouldStopExecution(3)){break;}if (window.CP.shouldStopExecution(3)){break;}
      addRow = gridTable.insertRow(row);
      for (var columns = 0; columns < gridColumnsInputValue; columns++) {if (window.CP.shouldStopExecution(2)){break;}if (window.CP.shouldStopExecution(2)){break;}
        addRow.insertCell(columns);
      }
    }
  };

  var colorPicker = function colorPicker(e) {
    var colorInputValue = colorInput.value;
    e.target.nodeName === "TD" ? e.target.style.backgroundColor = colorInputValue : "";
  };

  window.addEventListener("load", clearAndMakeGrid, colorPicker, false);
  gridButton.addEventListener("click", clearAndMakeGrid, false);
  gridTable.addEventListener("click", colorPicker, false);
  colorInput.addEventListener("input", colorPicker, false);
})();
