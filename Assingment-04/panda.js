/* Function For pandaCost Started */

/* Food Price */
const singaraPrice = 7;
const somusaPrice = 10;
const jilapiPrice = 15;

/* Function Started */
function pandaCost(singaraQuantity, somusaQuantity, jilapiQuantity) {
  let totalFoodPrice = 0;
  if (typeof singaraQuantity != "number") {
    return "Please Enter a number to define your Singara Quantity!";
  } else if (typeof somusaQuantity != "number") {
    return "Please Enter a number to define your Somusa Quantity!";
  } else if (typeof jilapiQuantity != "number") {
    return "Please Enter a number to define your Jilapi Quantity!";
  }
  singaraCost = singaraPrice * singaraQuantity;
  somusaCost = somusaPrice * somusaQuantity;
  jilapiCost = jilapiPrice * jilapiQuantity;
  totalFoodPrice = singaraCost + somusaCost + jilapiCost;
  return totalFoodPrice;
}

let bill = pandaCost(1, 1, 1);
console.log(bill);

/* Function For pandaCost Ended */
