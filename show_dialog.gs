function showDialog() {
  var output = HtmlService.createTemplateFromFile('display_convergence');
  var html = output.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME)
             .setWidth(500)
             .setHeight(300)
             .setTitle('convergence judgment');
  spreadsheet.show(html);
}

function showDialog2() {
  var output2 = HtmlService.createTemplateFromFile('display_not_convergence');
  var html2 = output2.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME)
             .setWidth(500)
             .setHeight(300)
             .setTitle('convergence judgment');
  spreadsheet.show(html2);
}