/*
This is a custom function that returns the value of a cycloid.
Either variable x or y can be omitted.
@customfunction
@param r radius theta theta x x y y
*/
const cycloid = function cycloid(r,theta,x,y) {
  if (x = undefined){
    return r * ( 1 - Math.cos(theta));
  }else{
    return r * ( theta - Math.sin(theta));
  }
}

const entropy_kB = function Entropy_kB(number_of_particles_a,number_of_particles_b) {
  return k_b * Math.log()
}

const lengevin = function Lengevin(x) {
  return  (1 / Math.tanh(x)) - (1 / x);
}

/*
Returns the root mean square velocity, which is the velocity of the molecule.
@param T Temperature
@param M Molecular weight per mol
@customfunction
*/

const rmsv = function RMSV(T,M) {
  return Math.sqrt( 3 * gas_const * T / M );  
}

const rho_NTP = function density_NTP(molar_mass) {
  return (molar_mass * atm)/(gas_const * T0);
}

const mass_wave = function de_Broglie_wave(m,T) {
  return h_Planck / (m * rmsv(T,m * n_a));
}

const rad = function degToRad(degree) {
  return degree * (Math.PI / 180);
}

const deg = function radToDeg(radian) {
  return radian / (Math.PI / 180);
}

const sawtooth = function sawtooth(t) {
  return t - Math.floor(t);
}

const squareWave = function squareWave(t) {
  return sign(Math.sin(t));
}

const nernst = function Nernst(C_Inside,C_Outside,ion_valent,K) {
  return (gas_const * K / (ion_valent * Faraday_const)) * Math.log(C_Outside / C_Inside);
}

const re = function ReynoldsNumber(rho,v,η,D) {
  return (rho * v * D) / η;
}

const sign = function sign(x) {
  if (x > 0) {
    return 1;
  } else if (x < 0) {
    return -1;
  } else {
    return 0;
  }
}

const integral = function integral(f(x),start, end, r) {
  let dx = 0.00001; 
  if (start > end) {
    [start, end] = [end, start];
  }
  for (var x = start; x < end; x += dx) {
    r += f(x) * dx;
  }
  return r;
}

const free_energy = function free_Energy(T, H, S) {
  return H - (T * S);
}
