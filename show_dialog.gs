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

//重複コードが嫌なのでひな形を作って分岐する

function showDialog3() {
  var output = HtmlService.createTemplateFromFile('display_convergence');
  var html = output.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME)
             .setWidth(500)
             .setHeight(300)
             .setTitle('convergence judgment');
  spreadsheet.show(html);
}

function output(x){
  return HtmlService.createTemplateFromFile('x');

//するとこうなる

function shouDialog4() {
  var html = output(display_convergence).evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME)
             .setWidth(500)
             .setHeight(300)
             .setTitle('convergence judgment');
  spreadsheet.show(html);
}

//まだまだ統合する

/*
if(zero_quest <= 0.00){
    showDialog()
  }else{
    showDialog2()
  }
*/

//に注目して，zero_questをグローバルスコープで記述

//すると，

function shouDialog5() {
  var html = output(display_convergence).evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME)
             .setWidth(500)
             .setHeight(300)
             .setTitle('convergence judgment');
  spreadsheet.show(html);
}

function output_(zero_quest){
  if(zero_quest <= 0.00){
    return HtmlService.createTemplateFromFile('x');
  }else{
    return HtmlService.createTemplateFromFile('x');
  }

//もうすこし修正

function shouDialog6() {
  var html = output(zero_quest).evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME)
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

//完成