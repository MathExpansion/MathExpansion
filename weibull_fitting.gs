function weibull_fitting() {
  let sheetrange = sheet.getActiveRange();
  let data = sheetrange.getValues();

  let sort = Array.from(data).sort(order);
  sheetrange.setValues(sort);
  
  function order(val1, val2) {
    if(val1 > val2){
        return 1;   //val1>val2の場合、val2をval1の前に配置
      }else if(val1 < val2){
        return -1;  //val1<val2の場合、val2をval1の後に配置
      }else{
        return 0;    //配置変更なし
    }  
  }
  let n = sheetrange.length;
  if(n > 30){
    const i_03 = sheetrange.offset(0, -1).getValues().map((x) => x - 0.3);
    const f_median = i_03 / n + 0.4 ;
    sheetrange.offset(0,1).setValues([f_median]);
  }else{
    const f_average = sheetrange.offset(0, -1).getValues().map((x) => x / n + 1);
    sheetrange.offset(0,1).setValues([f_average]);
  }

}
