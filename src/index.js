module.exports = function getZerosCount(number, base) {
var simple = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113],
    del = [],
    step = [],
    j = 0;
for (i=0; i <= simple.length; i++)
{
  tmp = base;
  if (tmp%simple[i]===0)
  {
    del.push(simple[i]);
    tmp/=simple[i];
  };
};

function maxPowerOf(p, n)
{  
  var k = 0;
  var powerOfP = 1;
  while (true) 
  {
    powerOfP *= p;
    var addend = Math.floor(number / powerOfP);
    if (addend == 0) return k;
    k += addend;
  };
};
for (i=0; i<del.length; i++)
  {
    step.push(maxPowerOf(del[i],number));
  }
 step.sort(function(a,b){return a-b});
 return(Math.floor(step[0]));

}