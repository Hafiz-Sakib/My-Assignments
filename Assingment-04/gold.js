/* This is the Function For Converting Gold Weight From Ana To Vori */

function anaToVori(ana) {
  if (typeof ana != "number") {
    return "Please Enter a Number";
  }
  let vori = ana / 16;
  return vori;
}

let gold = anaToVori(16);
console.log(gold);

/* Ana To Vori Function Ends */
