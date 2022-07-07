// 1
function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
  }
// 2
  function makeNegative(num) {
    return -Math.abs(num);
 }
//  3
function powersOfTwo(n){
    let result = [];
        for (let i = 0; i <= n; i++){
          result.push(2 ** i);
        }
        return result
  }
//   4