// 2)Написать функцию, которая получает в качестве аргумента массив с числами. Функция нужна для расчета суммы четных чисел в массиве. Так же написать новую функцию для расчета суммы нечетных чисел в массиве. 


// Написать функцию, которая принимает как аргумент две полученные суммы и выводит наибольшее из них.


function sumEvenNumbers(arr) {
    let sum = 0;
    
    for (const num of arr) {
      if (num % 2 === 0) {
        sum += num;
      }
    }
    
    return sum;
  }

  function sumOddNumbers(arr) {
    let sum = 0;
    
    for (const num of arr) {
      if (num % 2 !== 0) {
        sum += num;
      }
    }
    
    return sum;
  }

  function findLargerSum(sum1, sum2) {
    if (sum1 > sum2) {
      return sum1;
    } else {
      return sum2;
    }
  }

  const numbers = [1, 2, 9, 4, 5, 6, 7, 8, 9, 10, 45];

const evenSum = sumEvenNumbers(numbers);
console.log("Сумма четных чисел:", evenSum);

const oddSum = sumOddNumbers(numbers);
console.log("Сумма нечетных чисел:", oddSum);

const largestSum = findLargerSum(evenSum, oddSum);
console.log("Большая сумма:", largestSum);
  