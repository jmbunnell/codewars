// Break camelCase
function solution(string) {
    // split string into array
    var s = string.split('');
    
    // empty variables for string & array
    var arr = [];
    var t = '';
  
    // loop thru array 
    for (let i = 0; i < s.length; i++) {
      
      // if capital push to string with space in front
      if (s[i] === s[i].toUpperCase()) {
        arr.push(` ${s[i]}`);
      } else {
        arr.push(s[i]);
      };
    };
    
    // return string with space
    t = arr.join('');
    return t;
}
console.log(solution('helloThere'));
