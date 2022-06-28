const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(10000).fill('nemo');

//ES5
function findNemo(array) {

    // Big O Notation of O(n) --> Linear Time 
    // the number of elements in an array increase and the number of operations increase in a for loop ... (linear)
    for (let i = 0; i < nemo.length; i++) {
        console.log('running');
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
            break; // best case, this makes the function a little bit more efficient...
        }
    }
}
findNemo(large);

// TODO: What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
    let a = 10; // O(1)
    a = 50 + 3; // O(1)

    for (let i = 0; i < input.length; i++) {
        anotherFunction(); // O(n)
        let stranger = true; // O(n)
        a++; // O(n)
    }
    return a; // O(1)
}
// 3 steps + n + n + n + n
// 3 + 4n so ... 
// BIG O(3 + 3n) --> BIG O(n)

//TODO: What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
    let a = 5; // O(1)
    let b = 10; // O(1)
    let c = 50; // O(1)
    for (let i = 0; i < input; i++) {
        let x = i + 1; // O(n)
        let y = i + 2; // O(n)
        let z = i + 3; // O(n)
    }
    for (let j = 0; j < input; j++) {
      let p = j * 2; // O(n)
      let q = j * 2; // O(n)
    }
    let whoAmI = "I don't know"; //O(1)
}

// BIG O(4 + 5n) --> BIG O(n)


// TODO: What is the BIG O Notation of this function??
function compressBoxesTwice(boxes, boxes2) { 

    boxes.forEach(function(boxes) {
        console.log(boxes); // O(a) 
    });

    boxes2.forEach(function(boxes) {
        console.log(boxes); // O(b)
    });
}
// Although there are 2 for loops in the compressBoxesTwice function,
// the inputs in the function determine there is a compelity of 
// BIG O(a + b)


// TODO: What is the BIG O Notation of this function??
function compressBoxesTwice(boxes, boxes2) { 

    boxes.forEach(function(boxes) {
        console.log(boxes); // O(a) 

        boxes2.forEach(function(boxes) {
            console.log(boxes); // O(b)
        });
    });

}
// because there is nested for loops with different inputs, 
// you multiple nested for loops together, although there are different inputs so...
// the time complexity would be
// BIG O(a*b)

// TODO: Log all pairs of array
const boxes = ['a','b','c','d','e'];

function logAllPairs(array) {

    for (let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            console.log(array[i], array[j]);
        }
    }
}
logAllPairs(boxes);

// nested for loops are multiplied together for the BIG O notation
// BIG O(n^2) <-- Quadratic Time

// TODO: What is the BIG O??
function printAllNumbersThenAllPairSums(numbers) {

    console.log('these are the numbers:');
    numbers.forEach(function(number) { // O(n)
        console.log(number);
    });

    console.log('and these are their sums:');
    numbers.forEach(function(firstNumber) { // O(n)
        numbers.forEach(function(secondNumber) { // nested for loop O(n)
            console.log(firstNumber + secondNumber);
        });
    });
}
printAllNumbersThenAllPairSums([1,2,3,4,5])

// BIG O(n * n^2) with rule 4 in mind dropping the non-dominant terms, this becomes ...
// BIG O(n^2)