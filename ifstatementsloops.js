function isPositive(i) {
    if (i > 0) {
        return true;
    } else { (i < 0)
        return false;
    }
}

console.log(isPositive(5));
console.log(isPositive(-1));
console.log(isPositive(-2));

function getCapital(state) {
    if (state == 'MI') {
        return 'Lansing';
    } else if (state == 'NY') {
        return 'Albany';
    } else if (state == 'FL') {
        return 'Tallahassee';
    }
}

console.log(getCapital('MI'));
console.log(getCapital('NY'));
console.log(getCapital('FL'));


// 
// - returns 5% of that income if it is less than $10000, 10% of that income if it is between $10000-$20000, and 15% if it is greater than $20000


function calculateTaxes(income) {
     if (income < 10000) {
        return (income * .05);
    } else if (income >10000 <20000) {
        return (income * .10);
    } else if (income > 20000) {
        return (income * 15);
    } 
}
console.log(calculateTaxes(5000));
console.log(calculateTaxes(15000));
console.log(calculateTaxes(25000));


for (var i=1; i <= 100; i++)
{
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}

 function drawTree(numRows) {
  for (let i=0; i < numRows; i++) {
    const numStars = 2 * i + 1;
    console.log("*".repeat(numStars));
  }
}

drawTree(4);

