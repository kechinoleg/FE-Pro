// //declaration
// function hi() {
//     console.log("hello!");
// }

// //expression
// const sayHi = function () {
//     console.log("hello!!");
// };

// sayHi();

// //sayHi();

// console.log(name);

// var name = "Oleg";
// let name2 = "Joe";
// const name3 = "Milana";

// //hoisting

// //arrow function

// const arrowHi = () => console.log("Hello arrow!!!");

// const returnHI = () => "Hi!!";

// const newNum = (number) => {
//     const result = number ** 2;
//     return result;
// };

//collback function

// const func1 = function () {
//     console.log("This is function1");
// };

// const func2 = function (callback) {
//     console.log("This is function2");
//     callback();
// };

// func2(func1);

// console.log(func1);

// function workWithArray(array, callback) {
//     return callback(array);
// }

// function sumOfArray(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// const result = workWithArray([1, 4, 5], sumOfArray);
// console.log(result);

// function arrWidhtOdd(arr) {
//     let result = [];
//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) result.push(arr[i]);
//     }
//     return result;
// }

// console.log(workWithArray([1, 2, 4, 6, 9, 5], arrWidhtOdd));

// const btn = document.querySelector("button");
// const numberP = document.querySelector("p");

// // btn.onclick = function () {
// //     alert("Hello Word");
// // }

// let num = +numberP.textContent;
// //parseint(), +"", Number("")

// //0 => "0"
// //0 + "" = "0"
// //"0" + 1 = "01"
// //1+2+3+4+6+ "" => "11"

// btn.onclick = () => {
//     num ++;
//     numberP.innerText = num;
// }
//-----------------------------------
// const numP = document.querySelector("p");
// const plusBtn = document.querySelector("#inc");
// const minusBtn = document.querySelector("#dec");

// let num = +numP.textContent;

// plusBtn.addEventListener("click", () => {
//     num++;
//     numP.innerText = num;
// })

// minusBtn.addEventListener("click", () => {
//     num--;
//     numP.innerText = num;
// })

//-----------------------------------

// const p = document.querySelector("p");

// let pContent = p.textContent;

// addEventListener("keydown", (event) => {
//     console.log(event);
//     pContent += event.key;
//     p.innerText = pContent;
// })

//----------------------------------

// Задача:Создайте программу, которая генерирует кнопки на основе массива строк и выводит их в интерфейс. При нажатии на кнопку текст должен меняться на "Clicked".

const arrString = ["Btn1", "Btn2", "Btn3", "Btn4"];

for (let i = 0; i < array.length; i++) {
    
}


