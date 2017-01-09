// To find the symmetric difference of two arrays //

/* Code Skeleton

Merge and flatten the two arrays. Filter and return instances of all non-repeated elements

*/

function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  var filteredArray = newArr.filter(function(arg1, arg2, arg3) {
      if (arg3.indexOf(arg1) === arg3.lastIndexOf(arg1)) {
          return arg1;
      }
  });
  //console.log(newArr);
  // Same, same; but different.
  return filteredArray;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
