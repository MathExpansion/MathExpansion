function clothoidCurve(a,b,stepSize) {

  var data = [['x', 'y']];

  for (var t = 0; t <= a * Math.sqrt(b); t += stepSize) {
    var x = Math.cos((a * t * t) / 2);
    var y = Math.sin((a * t * t) / 2);
    data.push([x, y]);
  }

  sheet.getRange(1, 1, data.length, data[0].length).setValues(data);
}