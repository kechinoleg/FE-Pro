// const word = "cat";

// let newWord = "";

// for (let i = word.length - 1; i >= 0; i--) {
//     newWord += word[i];
// }

// console.log(newWord);

// const nums = [1, 2, 3];

// for(let i = nums.length -1; i >=0; i--) {
//     console.log(nums[i]);
// }

// function create(words) {
//     let newWord = "";
//     for (let i = words.lenght - 1; i >= 0; i--) {
//         newWord += words[i];
//     }

//     return newWord;
// }

// const newWord = create("cat");

// console.log (create("cat"));

// getElementById => document

// const para = document.getElementById("text");

// console.log(para);

// para.innerText = "New text";

// const hello = document.getElementsByClassName("hello");
// console.log(hello);

// for (let i = 0; i < hello.length; i++) {
//     hello[i].innerText = "Hi!!!";
// }

// const lis = document.getElementsByTagName("li");

// for (let i = 0; i < lis.length; i++) {
//     lis[i].innerText = i;
// }

// 


// const image = document.querySelector("img");
// // setAttribute

// image.setAttribute(
//   "src",
//   "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg"
// );

// const imgText = "alt for image";

// image.setAttribute("alt", imgText);


// const create = document.querySelectorAll("a");
// let arr = [];

// for(let i = 0; i < create.length; i++) {
//     let texts = create[i].textContent;
//     arr.push(texts);
// }

// console.log(arr);

const creat = document.querySelectorAll("a");
let arr = [];

for(let i = 0; i < creat.length; i++){
    let texts = creat[i].textContent;
    arr.push(texts);
}
console.log(arr);