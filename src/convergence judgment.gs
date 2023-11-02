function convergence_judgment() {
  function currentvalue(n) { 
  sheet.getCurrentCell()
  .offset(n,0).activate().getvalue();
  }

  var value_n = currentvalue(n);
  var value_n_1 = currentvalue(n-1);
  var zero_quest = value_n + value_n_1 ;

  function showDialog() {
  var html = output_(zero_quest).evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME)
             .setWidth(500)
             .setHeight(300)
             .setTitle('convergence judgment');
  spreadsheet.show(html);
}

function output_(zero_quest){
  if(zero_quest <= 0.00){
    return HtmlService.createTemplateFromFile('display_convergence');
  }else{
    return HtmlService.createTemplateFromFile('display_not_convergence');
  }

}