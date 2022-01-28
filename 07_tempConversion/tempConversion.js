const ftoc = function(val) {
  val = (val-32) * 5/9;
  return Math.round(val*10)/10;
};

const ctof = function(val) {
  val = val*9/5 + 32;
  return Math.round(val*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};