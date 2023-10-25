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

function Entropy_kB(number_of_particles_a,number_of_particles_b) {
  return k_b * Math.log()
}

function Lengevin(x) {
  return  (1 / Math.tanh(x)) - (1 / x);
}

/*
Returns the root mean square velocity, which is the velocity of the molecule.
@param T Temperature
@param M Molecular weight per mol
@customfunction
*/

function RMSV(T,M) {
  return Math.sqrt( 3 * gas_const * T / M );  
}

function density_NTP(molar_mass) {
  return (molar_mass * atm)/(gas_const * T0);
}

function de_Broglie_wave(m,T) {
  return h_Planck / (m * RMSV(T,m * n_a));
}

function degToRad(deg) {
  return deg * (Math.PI / 180);
}

function radToDeg(rad) {
  return rad / (Math.PI / 180);
}

function sawtooth(t) {
  return t - Math.floor(t);
}



