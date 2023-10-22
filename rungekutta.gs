function rungeKuttaMethod(f, y0, t0, tn, h) {
  var t = t0;
  var y = y0;

  var data = [];
  data.push([t, y]);

  while (t < tn) {
    var k1 = h * f(t, y);
    var k2 = h * f(t + h/2, y + k1/2);
    var k3 = h * f(t + h/2, y + k2/2);
    var k4 = h * f(t + h, y + k3);

    y = y + (k1 + 2*k2 + 2*k3 + k4)/6;
    t = t + h;

    data.push([t, y]);
  }

  return data;
}

function testRungeKuttaMethod() {
  var f = function(t, y) {
    return t * y;
  };

  var y0 = 1;
  var t0 = 0;
  var tn = 1;
  var h = 0.1;

  var data = rungeKuttaMethod(f, y0, t0, tn, h);

  // データの表示
  sheet.getRange(1, 1, data.length, 2).setValues(data);
}
