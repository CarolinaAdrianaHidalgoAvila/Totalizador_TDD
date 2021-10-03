import calcularTotal from "./App";

const form = document.querySelector("#totalizer-form");
const quantity = document.querySelector("#quantity-input");
const price = document.querySelector("#price-input");
const state = document.querySelector("#state");

const quantity_output = document.querySelector("#show-quantity");
const price_output = document.querySelector("#show-price");
const total_taxes_price_output = document.querySelector("#show-total-taxes-price");
const total_taxes_discount_output = document.querySelector("#show-total-taxes-discount");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("SALE WAS CONFIRMED")
  quantity_output.innerHTML = "Quantity: " + quantity.value
  price_output.innerHTML = "Price: " + price.value
  total_taxes_discount_output.innerHTML = "<p>"+"Total with taxes and discount: "+ calcularTotal(quantity.value,price.value,state.value) + "</p>";
});
