function findMinNumber(arr) {
    if (arr.length === 0) {
      return undefined; 
    }
  
    let min = arr[0]; 
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i]; 
      }
    }
  
    return min; 
  }
  
  const numbers = [7, 45, 67, 23, 9, 56];
  const minNumber = findMinNumber(numbers);
  
  console.log("Минимальное число:", minNumber); 
  