function sumMix(x){
  var arr = [];
  var length = x.length;
 
  //Make strings integers
  for (let i = 0; i < length; i++) {
    arr.push(parseInt(x[i]));
  }
  
  //Add array of integers together
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
