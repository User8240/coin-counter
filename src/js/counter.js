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

function coined(value) {
  return function(money){
    return Math.floor(money / value); //floor will round 19.96 down to 19	
  }
} //return coinCounter(amount % ${value})

function toSentence(quarters) {
  return function(dimes) {
    return function(nickels) {
      return function(pennies) {
        return 'Your change is ${quarters} quarters, ${dimes} dimes, ${nickels} nickels and ${pennies} pennies.'
      }
    }
  }
}
 
const quarter = coin(.25);
const dime = coin(.1);
const nickel = coin(.05);
const penny = coin(.01);
console.log(toSentence(quarter()))
//(im gonna keep this session running regardless - so feel free to use it :))



        //Base Functions
//-----------------------------------------------------------------------------------------------------
function coin(value) {
  return function(money){
    return Math.floor(money / value); //floor will round 19.96 down to 19	
  }
}

function remains (value) {
  return function (money) {
    return money % value;
  }
}

function recursiveMoney(counter) {
  return function(currency) {
    return function (money) {
      if (isNaN(money)) {
        return;
      }
      if (money <= 0) {
        return;
      } else {
        console.log(currency[counter][1] + 's: ' + coin(currency[counter][0])(money));
        return recursiveMoney(counter + 1)(currency)(remains(currency[counter][0])(money));
      }
    }
  }
}

const countMoney = recursiveMoney(0);
//ex: Money - $4.85
//code: usaChange(4.85);
//result: 19, 0, 1, 4

//-----------------------------------------------------------------------------
        //USA
const usaCoins = [
  [.25,'quarter'],
  [.1,'dime'],
  [.05,'nickel'],
  [.01,'penny']
];

const usaChange = countMoney(usaCoins);

//------------------------------------------------------------------------------
        //Canada
const canadaCoins = [
  [2, 'toonie'],
  [1, 'loonie']
  [.25,'quarter'],
  [.1,'dime'],
  [.05,'nickel'],
  [.01,'penny']
];

const canadaChange = countMoney(canadaCoins);

//------------------------------------------------------------------------------
        //Australia
const stralianCoins = [
  [1, 'dollariedoo'],
  [.5, 'fiddycent'],
  [.2, 'platy'],
  [.1, 'bird'],
  [.05, 'echidna'],
  [.02, '2c'],
  [.01, '1c']
];

const straliaChange = countMoney(stralianCoins);

//-----------------------------------------------------------
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
