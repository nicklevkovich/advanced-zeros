module.exports = function getZerosCount(number, base) {
  const simpleDividers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271];
  let dividers = [];
  let dividersCount = [];
  let j = 0;
  let step = [];

  const maxPowerOf = (p) => {
    let k = 0;
    let powerOfP = 1;
    while (true) {
      powerOfP *= p;
      let end = Math.floor(number / powerOfP);
      if (end === 0) return k;
      k += end;
    };
  };

  for (let i = 0; i < simpleDividers.length; i++) {
    tmp = base;
    if (tmp % simpleDividers[i] === 0) {
      dividers.push(simpleDividers[i]);
      dividersCount.push(0);
      tmp /= simpleDividers[i];
    };
  };
  for (i = 0; i < dividers.length; i++) {
    while (base % dividers[i] === 0) {
      base /= dividers[i];
      dividersCount[j]++;
    };
  j++;
  };

  for (i = 0; i < dividers.length; i++) {
    step.push(maxPowerOf(dividers[i]) / dividersCount[i]);
  };
  step.sort((a,b) => a-b);
  return(Math.floor(step[0]));
}