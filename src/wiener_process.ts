/*
Copyright 2023 MathExpansion

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

function simulateWienerProcess(n: number) {
  const wienerProcess = [0]; // 初期値
  for (let i = 1; i < n; i++) {
    const randomValue = Math.random() * 2 - 1; // -1から1までの一様乱数
    const nextValue = wienerProcess[i - 1] + randomValue;
    const rangeactivate = sheet_Wiener.getRange(i, 2, 1).activate();
    sheet_Wiener.getActiveRangeList().setValue(nextValue);
    wienerProcess.push(nextValue);
  }

  return wienerProcess;
}

// ウィーナー過程のシミュレーション
const wienerProcess = simulateWienerProcess(n_Wiener);

// 結果を別のシートに出力
let sheet_Wiener = spreadsheet.getSheetByName('Wiener_Result'); // 結果を出力するシートの名前を指定
if (!outputSheet) {
  sheet_Wiener = spreadsheet.insertSheet('Wiener_Result');
}

sheet_Wiener.getRange('A1').activate();
sheet_Wiener.getCurrentCell().setFormula('=SEQUENCE("' + n_Wiener + '",1,0,1)');
const sheetgetrange1 = sheet_Wiener.getRange(1, 1, n_Wiener).activate();
const sheetgetrange2 = sheet_Wiener.getRange(1, 2, n_Wiener).activate();

const chart_Wiener = sheet_Wiener
  .newChart()
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
