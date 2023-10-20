function onOpen() {
  spreadsheet
    .addMenu('Math_expansion', [
      {name: 'convergence judgment', functionName: 'convergence_judgment'},
    ]);
}
