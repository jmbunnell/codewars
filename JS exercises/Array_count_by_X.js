// Function takes two arguments that will return an array of the first n multiples of x.

function countBy(x, n) {
  let z = [];
  // Loop through 'n' amount of times and give multiples of 'x'
  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  } 
  return z;
};

