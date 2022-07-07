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
//   5
const rps = (p1, p2) => {
    if (p1 === 'rock' && p2 === 'scissors') {
      return('Player 1 won!');
    }
    
    else if (p1 === 'scissors' && p2 === 'paper') {
      return('Player 1 won!');
    }
    
    else if (p1 === 'paper' && p2 === 'rock') {
      return('Player 1 won!');
    }
    
    else if (p1 === p2) {
      return('Draw!');
    }
    
    else {
      return('Player 2 won!');
    }
  };
//   6
function narcissistic(value) {
    // Code me to return true or false
    let list = value.toString().split(''),
        sum = 0,
        result = value;
    
      for (let i = 0; i < list.length; i++){
        list[i] = Math.pow(list[i], list.length);
        sum += list[i];
      }
    if (sum == result) {
      return true;
    }
    else {
      return false;
    }
  }
//   7