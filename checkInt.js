//run with node

function checkInt(int, arr){
  console.log("The array is " + arr + ". Checking for integer: " + int);
  if(arr.length < 2){
    return arr[0] === int;
  }else if (arr.length >= 2){
    var midIndex = Math.floor(arr.length/2);
    console.log(midIndex);
    var newArr = int < arr[midIndex] ? arr.slice(0,midIndex) : arr.slice(midIndex, arr.length);
    console.log(newArr);
    return checkInt(int, newArr);
  }
}

checkInt(6, [2,3,4,5,6,7,8]);
