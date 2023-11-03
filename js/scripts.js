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

  const sizeCost = sizePrices[size];

  const toppingsCost = toppings.length;

  const totalCost = sizeCost + toppingsCost;

  return totalCost;
}