// const myDiv = document.createElement("div");

// myDiv.setAttribute("id", "root");

// const body = document.querySelector("body");

// body.appendChild(myDiv);

// for(let i = 1; i <= 20; i++) {
//     const textP = document.createElement("p");
//     textP.innerText = i;
//     body.append(textP);
// }

// const heading = document.createElement ("h1");
// heading.innerText = "August";

// const div = document.createElement("div");

// div.append(heading);

// body.append(div);

// Задача:Совет по жизни! Создайте div.
//     Внутри заголовок с вашим ФИО. (h3) А так же добавьте чистосердечный совет в виде параграфа.

// const myDiv = document.createElement('div');

// const fullNameHeading = document.createElement('h3');
// fullNameHeading.textContent = 'Кечин Олег Михайлович';

// const adviceParagraph = document.createElement('p');
// adviceParagraph.textContent = 'Совет: Будьте счастливы.';

// myDiv.append(fullNameHeading, adviceParagraph);

// document.body.appendChild(myDiv);

// const strings = [
//     "createElement - создаёт элемент c тем тегом, что указан в аргументе",
//     "appendChild - обавляет узел в конец списка дочерних элементов указанного родительского узла.",
//     "Циклы - for(for in , for of), while, do while",
//     "Функции являются основными «строительными блоками» программы.",
//   ];

//   const stringDiv = document.createElement("div");
//   body.append(stringDiv);

//   for(let element of strings) {
//     const createStr = document.createElement("p");
//     createStr.innerText = element;
//     stringDiv.append(createStr);
//   }

// const name = prompt("Your name:");

// const img = prompt("Image url:");
// const article = prompt("Article's url:");

// const newImg = document.createElement("img");
// newImg.setAttribute("src", img);

// const link = document.createElement("a");
// link.innerText = "Переходи по клику";
// link.setAttribute("href", article);

// document.querySelector("body").append(newImg, link);

// const link = prompt("write in link");

// const newLink = document.createElement("a");
// newLink.setAttribute("href", link);

// const img = document.createElement("img");
// img.setAttribute("src", "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg");
// img.setAttribute("alt", "cat");

// newLink.append(img);
// document.querySelector("body").append(newLink);

// function imgWithLink(srcImg, hrefLink) {
//     const img = document.createElement("img");
//     img.setAttribute("src", srcImg);

//     const link = document.createElement("a");
//     link.setAttribute("href", hrefLink);

//     link.append(img);
//     return link;

// }

// const newImg = imgWithLink("https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif", "https://www.google.com/");

// document.querySelector("body").append(newImg);

// let cars = [
//   {
//     title: "BMW",
//     price: 40000,
//     count: "15",
//   },
//   {
//     title: "Toyota",
//     price: 20000,
//     count: "13",
//   },
//   {
//     title: "Ford",
//     price: 30000,
//     count: "20",
//   },
//   {
//     title: "Chevrolet",
//     price: 60000,
//     count: "9",
//   },
//   {
//     title: "Volkswagen",
//     price: 30000,
//     count: "13",
//   },
// ];

// const productList = document.getElementById("productList");
// const totalQuantityElement = document.getElementById("totalQuantity");
// const totalPriceElement = document.getElementById("totalPrice");

// let totalQuantity = 0;
// let totalPrice = 0;

// products.forEach((product) => {
//   const listItem = document.createElement("li");
//   const count = parseInt(product.count);
//   const price = parseInt(product.price);
//   const totalPerProduct = count * price;

//   listItem.innerHTML = `
//       <span>${product.title}</span>
//       <span>Price: $${price} | Count: ${count}</span>
//       <span>Total: $${totalPerProduct}</span>
//     `;

//   productList.appendChild(listItem);

//   totalQuantity += count;
//   totalPrice += totalPerProduct;
// });

// totalQuantityElement.textContent = totalQuantity;
// totalPriceElement.textContent = `$${totalPrice}`;

function sumOfDigits(number) {
    if (number < 10) {
      return number;
    } else {
      return number % 10 + sumOfDigits(Math.floor(number / 10));
    }
  }
  
  const number = 12445;
  const result = sumOfDigits(number);
  console.log(`Сумма цифр числа ${number} равна ${result}`);


// class CountNumberRecursive {
//     count(number) {
//         return this.recursiveCount(number);
//     }

//     recursiveCount(number) {
//         let partOfNumber = number % 10;
//         let nextNumber = Math.floor(number / 10);
//         if (nextNumber === 0) {
//             return partOfNumber;
//         }
//         return partOfNumber + this.recursiveCount(nextNumber);
//     }
// }

// const countNumberRecursive = new CountNumberRecursive();
// console.log(countNumberRecursive.recursiveCount(1234567));