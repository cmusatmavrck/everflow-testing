const fashionProducts = [
    {
        id: 1,
        name: "T-Shirt",
        price: 19.99,
        description: "A comfortable and stylish t-shirt for everyday wear.",
    },
    {
        id: 2,
        name: "Jeans",
        price: 39.99,
        description: "Classic denim jeans that never go out of style.",
    },
    {
        id: 3,
        name: "Sneakers",
        price: 69.99,
        description: "Sporty sneakers with excellent comfort and support.",
    },
    {
        id: 4,
        name: "Dress",
        price: 49.99,
        description: "Elegant dress perfect for special occasions.",
    },
    {
        id: 5,
        name: "Jacket",
        price: 79.99,
        description: "Stylish jacket to keep you warm in chilly weather.",
    },
];


// function calculateTotal() {
//     const selectedProducts = document.querySelectorAll('input[type="checkbox"]:checked');

//     selectedProducts.forEach((checkbox) => {
//         const productItem = checkbox.parentNode;
//         const price = parseFloat(productItem.querySelector('div:nth-child(3)').textContent.replace(/Price: \$/g, ''));
//         console.log("CALCULATING", price);
//         const quantity = parseInt(productItem.querySelector('input[type="number"]').value);
//         total += price * quantity;
//     });

//     console.log(`Total: $${total.toFixed(2)}`);
// }


let total = 0;

function updateCartSummary() {
    const selectedProducts = document.querySelectorAll('input[type="checkbox"]:checked');
    const amountDiv = document.querySelector("#amount");

    selectedProducts.forEach((checkbox) => {
        const productItem = checkbox.parentNode;
        const price = parseFloat(productItem.querySelector('div:nth-child(3)').textContent.replace(/Price: \$/g, ''));
        console.log("UPDAting", price);
        const quantity = parseInt(productItem.querySelector('input[type="number"]').value);
        console.log(price, ".......",total);
        total += price * quantity;
    });

    localStorage.setItem("total", total);

    console.log(localStorage.getItem("total"));

    amountDiv.textContent = `Total: $${parseFloat(localStorage.getItem("total")).toFixed(2)}`;
}

function createProductItem(product) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <input type="checkbox" name="product" value="${product.id}">
        <span>${product.name}</span>
        <div>Price: $${product.price.toFixed(2)}</div>
        <label for="quantity">Quantity:</label>
        <input type="number" name="quantity" value="1" min="1" max="10">
    `;
    return listItem;
}

document.addEventListener("DOMContentLoaded", function () {
    productContainer = document.getElementById("product-list");
    // cartSummaryDiv = document.getElementById("total-amount");

    // Function to create a product item element
    

    // Loop through the fashionProducts array and add each product to the product list
    for (const product of fashionProducts) {
        const productItem = createProductItem(product);
        productContainer.appendChild(productItem);
    }

});
