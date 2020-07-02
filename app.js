// Function #1: Array Slice

/*
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
let modifiedFood = foods.slice(1, 4)
console.log(modifiedFood);
*/

// ### Function #2: Array Splice

let foods = ["pizza", "burger", "fingerShips", "donuts", "springRoll"];
let modifiedFood = foods.splice(2, 1, "noodles", "icecream");
console.log(foods);
console.log(modifiedFood);

// ### Function #3: Filter

isEven = (numberArray) => {
  var Evennumber = numberArray.filter((value) => {
    if (value % 2 === 0) return true;
    else return false;
  });
  return Evennumber;
};

console.log(isEven([2, 4, 9, 12]));

// ### Function #3: Filter

isPrime = (numberArray) => {
  let primenumber = numberArray.filter((value) => {
    var isprime = true;
    for (let i = 2; i <= Math.floor(value / 2); i++) {
      if (value % i === 0) isprime = false;
    }
    if (isprime == true) {
      return true;
    } else {
      return false;
    }
  });
  return primenumber;
};

console.log(isPrime([9, 12, 12, 14, 17, 19, 29]));

/*
nonPrime = (numberArray) => {
    let primenumber = reject(numberArray);
}

reject = (numberArray) => {
    for (let i = 0; i < numberArray.length; i++){
        

    }
}
*/

// Function #5: Lambda

isEven = (numberArray) => {
  var Evennumber = numberArray.filter((value) => {
    if (value % 2 === 0) return true;
    else return false;
  });
  return Evennumber;
};

// function 6

const myArray = [11, 34, 20, 5, 53, 16];

function findSquareOfNumbers(arr) {
  let array2 = arr.map((value) => value * value);
  console.log(array2);
}

findSquareOfNumbers(myArray);

// function 7

const myArray1 = [2, 3, 5];

function multiply(arr) {
  let arr2 = arr.reduce((num, prevNum) => num * prevNum);
  console.log(arr2);
}

multiply(myArray1);
