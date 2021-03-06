// Function Definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // this is the function body
  console.log(`Running Calculate Bill!!`);
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

// Function Call. Or **Run**
// const myTotal = calculateBill(100);
// const myBill2 = calculateBill(100, undefined, 0.2);
// console.log(myTotal);

// Function Definition
function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

// Function Call. Or **Run**
// const greeting = sayHiTo(`IK`);
// console.log(greeting);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = 'Silly Goose') {
  return `HEY ${name.toUpperCase()}`;
}
