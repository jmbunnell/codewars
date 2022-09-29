function digitize(n) {
  //Store integer as a array of strings
  var arr = [];
  var dig = n.toString().split('').reverse();
  arr = dig;
  
  var rev = [];
  var length = arr.length;
  
  // Loo[ through array and store in new array as integers
  for (let i = 0; i < length; i++) {
    rev.push(parseInt(arr[i]));
  }
  
  return rev;
}

