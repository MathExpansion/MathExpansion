/*
This is a custom function that returns the value of a cycloid.
Either variable x or y can be omitted.
@customfunction
@param r radius theta theta x x y y
*/
function cycloid(r,theta,x,y) {
  if (x = undefined){
    return r * ( 1 - Math.cos(theta));
  }else{
    return r * ( theta - Math.sin(theta));
  }
}
