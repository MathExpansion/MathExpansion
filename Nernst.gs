function Nernst(C_Inside,C_Outside,ion_valent,K) {
  return (gas_const * K / (ion_valent * Faraday_const)) * Math.log(C_Outside / C_Inside);
}