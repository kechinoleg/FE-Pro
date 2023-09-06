const products = [
    {
        title: "BMW",
        price: 40000,
        count: 15,
    },
    {
        title: "Toyota",
        price: 20000,
        count: 13,
    },
    {
        title: "Ford",
        price: 30000,
        count: 20,
    },
    {
        title: "Chevrolet",
        price: 60000,
        count: 9,
    },
    {
        title: "Volkswagen",
        price: 30000,
        count: 13,
    },
];

const productList = document.getElementById("product-list");
const totalDiv = document.getElementById("total");

function createProductElement(product) {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
        <h2>${product.title}</h2>
        <p>Цена: ${product.price} руб.</p>
        <p>Количество: ${product.count}</p>
        <p>Итого: ${product.price * product.count} руб.</p>
    `;
    return productDiv;
}

function calculateTotal() {
    let totalPrice = 0;
    let totalCount = 0;
    for (const product of products) {
        totalPrice += product.price * product.count;
        totalCount += product.count;
    }
    return { totalPrice, totalCount };
}

for (const product of products) {
    productList.appendChild(createProductElement(product));
}

const { totalPrice, totalCount } = calculateTotal();

totalDiv.innerHTML = `
    <div class="total">
        <p>Общая сумма: ${totalPrice} руб.</p>
        <p>Общее количество товаров: ${totalCount}</p>
    </div>
`;
