// 1)Написать функцию, которая получает в качестве аргумента число и строку, где число обозначает сколько раз должна быть добавлена эта строка в массив. Возвращает массив из этих строк. Например: передаем строку “dog” и цифру 3, в результате мы получаем [“dog”,”dog”,”dog”].

function createStringArray(str, count) {
    const result = [];
  
    for (let i = 0; i < count; i++) {
      result.push(str);
    }
  
    return result;
  }
  
  const inputString = "dog";
  const repeatCount = 34;
  const resultArray = createStringArray(inputString, repeatCount);
  
  console.log(resultArray);