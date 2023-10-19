function showDialog() {
  var output = HtmlService.createTemplateFromFile('display_convergence');
  var html = output.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME)
             .setWidth(500)
             .setHeight(300)
             .setTitle('convergence judgment');
  spreadsheet.show(html);
}