function youngLaplace(radius, gamma, rho_Inside, rho_Outside) {
  var deltaDensity = rho_Inside - rho_Outside;
  return ((2 * gamma) / radius) * deltaDensity;
}
