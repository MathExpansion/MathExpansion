/*
Returns the root mean square velocity, which is the velocity of the molecule.
@param T Temperature
@param M Molecular weight per mol
@customfunction
*/

function RMSV(T,M) {
  return Math.sqrt( 3 * gas_const * T / M );  
}
