// 摩擦係数の計算(表面粗さ/法線力)
function calculateFrictionCoefficient(surfaceRoughness, normalForce) {
  var frictionCoefficient = surfaceRoughness / normalForce;
  return frictionCoefficient;
}