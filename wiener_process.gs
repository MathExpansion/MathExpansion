function simulateWienerProcess(n_Wiener) {
  var wienerProcess = [0]; // 初期値
  for (var i = 1; i < n_Wiener; i++) {
    var randomValue = Math.random() * 2 - 1; // -1から1までの一様乱数
    var nextValue = wienerProcess[i-1] + randomValue;
    let rangeactivate = sheet_Wiener.getRange(i,2,1).activate();
    sheet_Wiener.getActiveRangeList().setValue(nextValue);
    wienerProcess.push(nextValue);
  }
  
  return wienerProcess;
}

// ウィーナー過程のシミュレーション
let n_Wiener = 800; // シミュレーションするデータ点の数
var wienerProcess = simulateWienerProcess(n_Wiener);

//シミュレーション結果の出力
//getRange(行番号, 列番号, 行数, 列数)
//console.log(wienerProcess);
//var spreadsheet = SpreadsheetApp.getActive();
  sheet_Wiener.getRange('A1').activate();
  sheet_Wiener.getCurrentCell().setFormula('=SEQUENCE("'+n_Wiener+'",1,0,1)');
const sheetgetrange1 = sheet_Wiener.getRange(1,1,n_Wiener).activate();
const sheetgetrange2 = sheet_Wiener.getRange(1,2,n_Wiener).activate();
//var sheet = spreadsheet.getActiveSheet();
var chart_Wiener = sheet_Wiener.newChart()
  .asLineChart()
  .addRange(sheetgetrange1)
  .addRange(sheetgetrange2)
  .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_COLUMNS)
  .setTransposeRowsAndColumns(false)
  .setNumHeaders(0)
  .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_BOTH)
  .setOption('useFirstColumnAsDomain', true)
  .setOption('isStacked', 'false')
  .setPosition(285, 3, 17, 16)
  .build();
  sheet_Wiener.insertChart(chart_Wiener);

//var rowcollapse1 = sheetgetrange1.shiftRowGroupDepth(1);

/*
function cellchoice() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var lastRow = sheet.getLastRow();
  var ary1 = sheet.getRange("A1:B100").getValues();
  for (i=0; i<=ary1.length-1; i++) {
    ary1[i][2] = ary1[i][0] * ary1[i][1]
  }
  sheet.getRange("A1:B100").setValues(ary1);
}
*/