function sumAll(arr) {
  
  var sumOfRange = arr.reduce(function(arg1, arg2){
    var max = Math.max(arg1, arg2);
    var min = Math.min(arg1, arg2);
    
    var sumToMax = max * (max + 1) / 2;
    var sumToMin = min * (min - 1) / 2;
    
    var sumRange = sumToMax - sumToMin;
    
    /*
    console.log("arg1 " + arg1);
    console.log("arg2 " + arg2);
    console.log("max " + max);
    console.log("min " + min);
    console.log("sum to max " + sumToMax);
    console.log("sum to min " + sumToMin);
    console.log("sumOfRange " + sumOfRange);    
    console.log(sumOfRange);
    */
    
    return sumRange;
  });
  
  return sumOfRange;
}

sumAll([5, 10]);
