function Lorenz_eq(x0,y0,z0,sigma,rho,beta,stepsize,t) {
  var lorenz = [[x0],[y0],[z0]];
  for (var i =1; i < t; i++) {
    x_next = lorenz[0];
    y_next = lorenz[1];
    z_next = lorenz[2];
    var x_next.map((x0) => ( sigma * (y0 - x0) ) * stepsize);
    var y_next.map((y0) => ( x0 * (rho - z0) - y0 ) * stepsize);
    var z_next.map((z0) => ( x0 * y0 - beta * z0) * stepsize);
    let sheet.getRange(i,3,i,3).activate();
    sheet.getActiveRangeList().setValue(lorenz);
    lorenz.push(x_next,y_next,z_next);
  }
}
