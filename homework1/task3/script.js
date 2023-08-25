// 3)Напишите функцию, которая как аргумент принимает строку. Эта функция возвращает это слово в развернутом виде. Пример:  “cat” => “tac”




function reverseString(str) {
    const reversed = str.split('').reverse().join('');
    return reversed;
  }
  
  const inputString = "anilorak";
  const reversedString = reverseString(inputString);
  
  console.log(reversedString); 



