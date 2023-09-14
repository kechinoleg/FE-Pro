const form = document.querySelector("form");
const titleInput = document.querySelector("#name");
const priceInput = document.querySelector("#price");

const sectionProducts = document.querySelector("#allProducts");

const products = [];

form.onsubmit = (e) => {
  e.preventDefault();
  products.push({ title: titleInput.value, price: priceInput.value });
  titleInput.value = "";
  priceInput.value = "";
  newProducts();
};

function createNode(title, price) {
  const div = document.createElement("div");
  div.classList.add("product");

  const titleP = document.createElement("p");
  const priceP = document.createElement("p");

  titleP.innerText = title;
  priceP.innerText = price;

const btn = closeBtn() ;


  div.append(titleP, priceP,btn);

  sectionProducts.append(div);
}

function newProducts() {
  sectionProducts.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    createNode(products[i].title, products[i].price);
  }
}

functioncloseBth() {
    const bth = document.createElement("button");
    btn.innerText = "x";
    btn.classList.add("close");
    return btn;
}