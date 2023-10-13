function convergence_judgment() {
  function currentvalue(n) { 
  SpreadsheetApp
  .getActiveSpreadsheet
  .getActiveSheet
  .getCurrentCell()
  .offset(n,0)
  .activate()
  .getvalue();
  }

  var value_n = currentvalue(n);
  var value_n_1 = currentvalue(n-1);
  var zero_quest = value_n + value_n_1 ;

  if(zero_quest <= 0.00){
    showDialog()
  }else{
    showDialog2()
  }
}