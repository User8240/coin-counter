//Create a coin counter application that takes X amount of money (such as $4.99) and determines the exact amount of change needed in quarters, dimes, nickels and pennies. Focus on writing good tests and functional code
//Create a coin counter function that uses recursion to solve the problem.

//--------------------------------------------------------------------------------------------------------

const coinCounter = (amount) => {
  if (amount === 0) {
    return amount;
  } 
  else if (amount > .24) {
    console.log(amount);
    const quarters = 0;
      
    quarters = math.floor(amount / .25)
    //floor will round 19.96 down to 19	
    return coinCounter(amount % .25)
  }
}

coinCounter(0);

//--------------------------------------------------------------------

function coin(value) {
  return function(money){
    return Math.floor(money / value); //floor will round 19.96 down to 19	
  }
}

function toSentence(quarters) {
  return function(dimes) {
    return function(nickels) {
      return function(pennies) {
        return 'Your change is ${quarters} quarters, ${dimes} dimes, ${nickels} nickels and ${pennies} pennies.'
      }
    }
  }
}

const incrementCounter = (counter) => {
  if (isNaN(counter)) {
    return;
  }
  if (counter >= 3) {
    return counter;
  } else {
    console.log(counter);
    return incrementCounter(counter + 1);
  }
}
  //return coinCounter(amount % ${value})
const quarter = coin(.25);
const dime = coin(.1);
const nickel = coin(.05);
const penny = coin(.01);

//(im gonna keep this session running regardless - so feel free to use it :))

console.log(toSentence(quarter()))
//--------------------------------------------------------------------------------------------------------

export default class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  checkType() {
    if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
      return "not a triangle";
    } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
      return "scalene triangle";
    }  else if ((this.side1 === this.side2) && (this.side1 === this.side3)) {
      return "equilateral triangle";
    } else {
      return "isosceles triangle";
    }
  }    
}
