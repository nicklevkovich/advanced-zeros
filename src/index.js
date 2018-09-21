module.exports = function getZerosCount(number, base) {
var simple = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271],
    del = [],
    del_count = [],
    j = 0,
    step = [];
for (i=0; i < simple.length; i++)
{
  tmp = base;
  if (tmp%simple[i]===0)
  {
    del.push(simple[i]);
    del_count.push(0);
    tmp/=simple[i];
  };
};
for (i=0; i < del.length; i++)
{
while (base%del[i]===0)
  {
      base/=del[i];
      del_count[j]++;
  }; 
  j++;
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
    step.push(maxPowerOf(del[i],number)/del_count[i]);
  }
 step.sort(function(a,b){return a-b});
 return(Math.floor(step[0]));

}