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
