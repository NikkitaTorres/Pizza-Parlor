function Pizza(pizzaSize, pizzaToppings) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
}

Pizza.prototype.calculateTotalCost = function() {
  const sizePrices = {
    "Small ($3.00)": 3.00,
    "Medium ($5.00)": 5.00,
    "Large ($7.00)": 7.00,
    "Xtra-Large ($10.00)": 10.00,
  };

  const toppingPrices = {
    cheese: 1.50,
    pepperoni: 1.00,
    jalapeno: 0.50,
    anchovie: 1.00,
    sausage: 2.00,
  };

  const sizeCost = sizePrices[this.pizzaSize];
  const toppingsCost = this.pizzaToppings.reduce((total, topping) => total + toppingPrices[topping], 0);
  const totalCost = sizeCost + toppingsCost;

  return totalCost;
};

function updateTotalCost() {
  const sizeSelect = document.getElementById("size");
  const selectedSize = sizeSelect.value;
  const selectedToppings = Array.from(document.querySelectorAll('input[name="pizza-topping"]:checked')).map(input => input.value);
  const pizza = new Pizza(selectedSize, selectedToppings);
  const totalCost = pizza.calculateTotalCost();
  const totalCostElement = document.getElementById("total-cost");
  totalCostElement.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", function() {
  const sizeSelect = document.getElementById("size");
  const toppingsForm = document.getElementById("toppings");

  sizeSelect.addEventListener("change", updateTotalCost);
  toppingsForm.addEventListener("submit", function(event) {
    event.preventDefault();
    updateTotalCost();
    document.querySelector("div#total-cost").removeAttribute("class");
  });

  updateTotalCost();
});