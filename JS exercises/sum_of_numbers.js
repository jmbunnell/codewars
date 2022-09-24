// Calculates sum of two numbers and the values in between them
function getSum(a, b)
{
   // Returns 1st value if both equal
  if (a === b) {
    return a;
  };
  
  // Creates start and end values
  const start = a > b ? b : a;
  const end = a > b ? a : b;
  
  // Sum all numbers from start value thru end value
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum = sum + i;
  };
  return sum;
}
