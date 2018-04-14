var express = require('express')
var app = express()
var math = require('mathjs')


console.log("Hello World!")

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
fibSums();
//console.log('The answer is : '+multiplesOfThreeFive(1000))
