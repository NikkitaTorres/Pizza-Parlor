function Pizza(pizzaSize, pizzaToppings) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
}

function calculateTotalCost(size, toppings) {
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

  const sizeCost = sizePrices[size];
  const toppingsCost = toppings.reduce((total, topping) => total + toppingPrices[topping], 0);
  const totalCost = sizeCost + toppingsCost;
  return totalCost;
}

document.addEventListener("DOMContentLoaded", function() {
  const sizeSelect = document.getElementById("size");
  const toppingsForm = document.getElementById("toppings");
  const totalCostElement = document.getElementById("total-cost");
  
  let selectedSize = sizeSelect.value; // Initialize with the default value
  
  sizeSelect.addEventListener("change", function () {
    selectedSize = sizeSelect.value;
    console.log(`Selected Size: ${selectedSize}`);
    const selectedToppings = Array.from(document.querySelectorAll('input[name="pizza-topping"]:checked')).map(input => input.value);
    const totalCost = calculateTotalCost(selectedSize, selectedToppings);
    console.log(`Total Cost: ${totalCost}`);
    updateTotalCost(totalCost);
  });
  
  toppingsForm.addEventListener("click", function () {
    const selectedToppings = Array.from(document.querySelectorAll('input[name="pizza-topping"]:checked')).map(input => input.value);
    const totalCost = calculateTotalCost(selectedSize, selectedToppings);
    updateTotalCost(totalCost);
  });
  
  function updateTotalCost(cost) {
    console.log(`Cost: ${cost}`);
    totalCostElement.textContent = `Total Cost: $${cost.toFixed(2)}`;
  }
});