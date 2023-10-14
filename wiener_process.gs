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

// 結果を別のシートに出力
  var sheet_Wiener = spreadsheet.getSheetByName("Wiener_Result"); // 結果を出力するシートの名前を指定
  if (!outputSheet) {
    sheet_Wiener = spreadsheet.insertSheet("Wiener_Result");
  }

  sheet_Wiener.getRange('A1').activate();
  sheet_Wiener.getCurrentCell().setFormula('=SEQUENCE("'+n_Wiener+'",1,0,1)');
const sheetgetrange1 = sheet_Wiener.getRange(1,1,n_Wiener).activate();
const sheetgetrange2 = sheet_Wiener.getRange(1,2,n_Wiener).activate();

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