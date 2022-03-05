/* Cost for Persons */
let costForFirst100Person = 5000;
let costForSecond100Person = 4000;
let costForRestPerson = 3000;

/* Function Started */

function picnicBudget(person) {
  if (typeof person != "number") {
    return "Please Enter a Number!";
  } else if (person <= 0) {
    return "Please Enter a Positive Number Value Which is Greater than Zero!";
  } else if (person <= 100) {
    const costForFirst100 = person * costForFirst100Person;
    return costForFirst100;
  } else if (person <= 200) {
    const costForFirst100 = 100 * costForFirst100Person;
    const restPerson = person - 100;
    const costForSecond100 = restPerson * costForSecond100Person;
    const totalCost = costForFirst100 + costForSecond100;
    return totalCost;
  } else if (person > 200) {
    const costForFirst100 = 100 * costForFirst100Person;
    const costForSecond100 = 100 * costForSecond100Person;
    const otherPerson = person - 200;
    const costForOtherPerson = otherPerson * costForRestPerson;
    const totalCost = costForFirst100 + costForSecond100 + costForOtherPerson;
    return totalCost;
  }
}

/* Function Ended */

let cost = picnicBudget(99);
console.log(cost);
