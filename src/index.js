module.exports = function reverse (n) {
    let absoluteN = Math.abs(n);
    let reversInt = '';
    console.log (typeof n);
    let stringN = absoluteN.toString();
    console.log (typeof stringN);
    for (let i = (stringN.length -1); i >= 0; i--){
      reversInt += stringN[i];
    }
//   console.log(reversInt);
//   return reversInt;

    return reversInt;
  
}
