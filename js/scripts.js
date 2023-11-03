function Pizza(pizzaSize, pizzaToppings) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.totalCost = this.calculateTotalCost();
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

const pizzas = [];

function addPizzaToOrder(size, toppings) {
  const pizza = new Pizza(size, toppings);
  pizzas.push(pizza);
  displayPizzas();
  updateTotalCost();
}

function displayPizzas() {
  const pizzaList = document.getElementById("pizza-list");
  pizzaList.innerHTML = "";

  pizzas.forEach((pizza, index) => {
    const pizzaItem = document.createElement("div");
    pizzaItem.textContent = `Pizza ${index + 1}: Size - ${pizza.pizzaSize}, Toppings - ${pizza.pizzaToppings.join(", ")}, Price - $${pizza.totalCost.toFixed(2)}`;
    pizzaItem.addEventListener("click", () => alert(`Details for Pizza ${index + 1}:\n${pizzaItem.textContent}`));
    pizzaList.appendChild(pizzaItem);
  });
}

function updateTotalCost() {
 
  const totalCostElement = document.getElementById("total-cost");
  
  const totalCost = pizzas.reduce((total, pizza) => total + pizza.totalCost, 0);
  
  totalCostElement.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
  
}

document.addEventListener("DOMContentLoaded", function() {
  const sizeSelect = document.getElementById("size");
  const toppingsForm = document.getElementById("toppings");

  toppingsForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const selectedSize = sizeSelect.options[sizeSelect.selectedIndex].text; // Get the selected size text
    const selectedToppings = Array.from(document.querySelectorAll('input[name="pizza-topping"]:checked')).map(input => input.value);
    addPizzaToOrder(selectedSize, selectedToppings);
  });
});