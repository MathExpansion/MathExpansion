function showDialog2() {
  var output2 = HtmlService.createTemplateFromFile('display_not_convergence');
  var ss2 = SpreadsheetApp.getActiveSpreadsheet();
  var html2 = output2.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME)
             .setWidth(500)
             .setHeight(300)
             .setTitle('convergence judgment');
  ss2.show(html2);
}