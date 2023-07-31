// GLOABALS
let total = 0;
let productContainer = undefined;
let cartSummaryDiv = undefined;


// Add any JavaScript code you want here
document.addEventListener("DOMContentLoaded", function () {
    // This function will be executed once the DOM is loaded.
    // You can add your JavaScript code here.

    console.log("DOM IS LOADED");

    const totalAmountDiv = document.getElementById("total-amount");

    if (totalAmountDiv) {
        cartSummaryDiv.textContent = `Total: $${total.toFixed(2)}`;
    }
});
