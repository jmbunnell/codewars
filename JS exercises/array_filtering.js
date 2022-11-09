// Return a new array with the strings filtered out

// My original code
function filter_list(l) {
  let arr = [];
  for (let i in l) {
    if (l[i] === Number(l[i])) {
      arr.push(l[i]);
    };
  };
  return arr;
}

// Best Practice
function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}
