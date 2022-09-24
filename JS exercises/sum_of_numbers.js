// Calculates sum of two numbers and the values in between them
function getSum(a, b)
{
   // Returns 1st value if both equal
  if (a === b) {
    return a;
  };
  
  // Creates max and min values
  const min = a > b ? b : a;
  const max = a > b ? a : b;
  
  // Sum all integers in array
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum = sum + i;
  };
  return sum;
}
