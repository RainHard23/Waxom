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
function mergeArrays(arr1, arr2) {
    let Arr = [].concat(arr1, arr2);
        
        for (let i = 0; i < Arr.length; i++) {
        
          function compare (a, b) {
          if (a > b) return 1;
          if (a == b) return 0;
          if (a < b) return -1;
          }
        
          Arr.sort(compare);
        }
        
        let Array = Arr.filter((item, index) => {
            return Arr.indexOf(item) === index
        });
        return Array;
  }