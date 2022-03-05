// Problem:1(ana to Vori)

function anaToVori(ana) {
  if (typeof ana != "number") {
    return "Please Enter a Number";
  }
  let vori = ana / 16;
  return vori;
}

/* let gold = anaToVori(16);
console.log(gold); */

// Problem:2(Panda Cost)

/* Food Price */
const singaraPrice = 7;
const somusaPrice = 10;
const jilapiPrice = 15;

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

/* let bill = pandaCost(1, 1, 1);
console.log(bill); */

// Problem:3(Picnic Budget)

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

// Problem:4(Odd Friend)

const myFriends = ["babu", "cabu", "dabu", "kabul", "fabu", "rahim"];

function oddFriend(friends) {
  let odd = [];
  for (let i = 0; i < friends.length; i++) {
    if (typeof friends[i] != "string") {
      return "Please Enter Your Input Parameter as an Array Which is Containing String!";
    } else if (friends[i].length % 2 != 0) {
      odd.push(friends[i]);
      break;
    }
  }
  return odd;
}

/* let output = oddFriend(myFriends);
console.log(output); */
