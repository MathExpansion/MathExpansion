function onOpen() {
  SpreadsheetApp
    .getActiveSpreadsheet()
    .addMenu('Math_expansion', [
      {name: 'convergence judgment', functionName: 'convergence_judgment'},
    ]);
}
