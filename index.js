var express = require('express')
var app = express()
var math = require('mathjs')



console.log("Hello World!")
console.log('')
console.log('Welcome to Atom\'s Project Euler App.')

function multiplesOfThreeFive(number){
  //the number we want to check for all nums div by 3 and 5
  var startingHigh = number-1;
  var sumof35 = 0;
  console.log('You want to check all numbers between 0 and '+startingHigh);
  for(i=startingHigh;i>0;i--){
    console.log(i)
    var result5 = i/5;
    var remainder5 = i%5;
    console.log('i/5 is '+result5+' and remainder is: '+remainder5)
    var result3 = i/3;
    var remainder3 = i%3;
    console.log('i/3 is '+result3+' and remainder is: '+remainder3)
    if(remainder5 === 0 || remainder3 ===0){
      sumof35 = sumof35 + i;
    }

    console.log("Sum is now: "+sumof35)
  }
  return sumof35
}

function fibSums(){

  var fibsum = 2;
  var max = 4000000;
  var fibnext = 3;
  var fib2P = 1;
  var fib1P = 2;
console.log('Initial fibNext ='+fibnext)
  while(fibnext < max){
    console.log('In the while loop fibnext = '+fibnext)

    fibnext = fib1P+fib2P;
    fib2P = fib1P;
    fib1P = fibnext;

    console.log('The next fibonacci number is : '+fibnext)
    var fibChecker = fibnext%2;
    console.log('fibchecker is:'+fibChecker)
    if((fibChecker==0)&&(fibnext<max)){
    fibsum = fibsum+fibnext
    console.log('fibsum = '+fibsum)
  }
  }
  console.log("Your final sum is : "+fibsum)
}

function largestPrimeFactor(number){
  var factors = []
  var primeFactors = []
  var maxNumber = number
  var bigPrime = 1

  for(i=2;i<maxNumber;i++){
    /*if(true){
      setTimeout(largestPrimeFactor, 1000)
    }*/
    var factorChecker = 1
    factorChecker = maxNumber % i
    //console.log('Tracking i and it is currently: '+i)

    if(factorChecker == 0){
      //console.log(i + ' is a facotr of '+maxNumber)
      factors.push(i)
      //Checking if the factor is a prime numbers
      for(j=2;j<=i;j++){
        //console.log('Tracking j :'+j)
        var isPrimeCheck = i % j
        //console.log('isPrimeCheck is: '+isPrimeCheck)
        if(j==i){
          //console.log(i+' is a prime number, adding it to the list.')
          bigPrime = i
          primeFactors.push(i)
        }else if(isPrimeCheck ==0){
          //console.log(i+' is not a prime numbers. Breaking.')
          break
        }else {
          //console.log(i+' may be a prime number, continuing check.')
          //console.log(j+' is j currently.')
        }


        }
      }

    }

  console.log('The factors are: '+factors)
  console.log('The factors that are prime are: '+primeFactors)
  console.log('The largest Prime Factor is :'+bigPrime)
}
/*
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});
*/
var cruncher = largestPrimeFactor(15000)//600851475143)
cruncher
//setInterval(cruncher, 100)
//largestPrimeFactor(600851475143)
//fibSums();
//console.log('The answer is : '+multiplesOfThreeFive(1000))
