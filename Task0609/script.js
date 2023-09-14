// const text = document.createElement("p");
// text.innerText = "This is text",
// document.querySelector("body").append(text);

// text.style

// console.log(text, style);

// text.style.color = "blue";
// text.style.fontSize = "30px";

// text.style.cssText = "color: violet; font-size: 70px; font-weight: bold";

//hover

//----------------------------------------------------------------------

// const div = document.createElement("div");
// document.querySelector("body").append(div);

// div.style.width = "300px";
// div.style.height = "300px";
// div.style.backgroundColor = "pink";

// div.onmouseover = () => {
//   div.style.backgroundColor = "yellow";
// };
// div.onmouseout = () => {
//   div.style.backgroundColor = "pink";
// };

//-----------------------------------------------------------------------

//Написать цикл, который создает множество div-ов c цветами от rgb(128, 128, 0) до rgb(128, 128, 255). У дивов цвет должен меняться с шагом 5.

// for (let i = 0; i <= 255; i += 5) {
//   const div = document.createElement("div");

//   div.style.backgroundColor = `rgb(128, 128, ${i})`;
//   document.querySelector("body").append(div);
//   div.style.width = "200px";
//   div.style.height = "200px";
// }

//-----------------------------------------------------------------------

//classlist

// console.log (div.classlist);

//add

// div.classList.add("test");
// div.classList.add("test2");

// // console.log(div.classList);

// div:classList.remove("test");

// div.classList.replace("test2", "newClass");
// console.log(div.classList);

//--------------------------------------------

// for (let i = 1; i <= 10; i++) {
//     const p = document.createElement("p");
//     p.innerText = i;
//     document.querySelector("body").append(p);
  
//     p.onclick = () => {
//       if (p.classList[0] === "active") {
//         p.classList.remove("active");
//       } else {
//         p.classList.add("active");
//       }
//     };
//   }

//------------------------------------------
// for (let i = 1; i <= 10; i++) {
//     const p = document.createElement("p");
//     p.innerText = i;
//     document.querySelector("body").append(p);
  
//     p.onclick = () => {
//         p.classList.toggle("active");

//-------------------------------------------

    //   if (p.classList.contains ("active")) {
    //     p.classList.remove("active");
    //   } else {
    //     p.classList.add("active");
    //   }

//     };
//   }

  //--------------------------------------------

//Задача:У вас есть параграф и кнопка. При нажатии на эту кнопку нужно изменить цвет параграфа, используя класс.

// const p = document.querySelector("p");
// const button = document.querySelector("button");
// button.onclick = () => {
//     p.classList.add("p")
// }

//-----------------------------------------------

// const bth = document.querySelector("button");
// const body = document.querySelector("body");

// bth.onclick = ()  => {
//     body.classList.toggle("dark");
// }


// const button = document.getElementById('button');
// button.addEventListener('click', function() {
//     // Изменяем текст кнопки
//     button.textContent = 'light theme';
//   });

// const cards = document.querySelectorAll('.card');

// cards.forEach(card => {
//   card.addEventListener('click', function () {
//     const lang = this.getAttribute('data-lang');
//     const enText = this.querySelector('.en');
//     const ruText = this.querySelector('.ru');
    
//     if (lang === 'ru') {
//       enText.classList.add('hidden');
//       ruText.classList.remove('hidden');
//       this.setAttribute('data-lang', 'en');
//     } else {
//       ruText.classList.add('hidden');
//       enText.classList.remove('hidden');
//       this.setAttribute('data-lang', 'ru');
//     }
//   });
// });
  