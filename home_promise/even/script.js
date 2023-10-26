function checkEvenNumber(number) {
    return new Promise((resolve, reject) => {
      if (typeof number !== 'number') {
        reject('Ошибка: Данное значение не число.');
      } else {
        if (number % 2 === 0) {
          resolve(`${number} четное число.`);
        } else {
          resolve(`${number} не четное число.`);
        }
      }
    });
  }
  
  const inputNumber = 12;
  
  checkEvenNumber(inputNumber)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
  