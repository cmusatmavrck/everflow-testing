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

document.addEventListener("DOMContentLoaded", function () {
    const productContainer = document.getElementById("product-list");

    // Function to create a product item element
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

    // Loop through the fashionProducts array and add each product to the product list
    for (const product of fashionProducts) {
        const productItem = createProductItem(product);
        productContainer.appendChild(productItem);
    }
});
