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

// TODO: Find 1st, Find Nth...
const array = [{
    tweet: 'hi',
    date: 2012
    }, {
    tweet: 'my',
    date: 2014
    }, {
    tweet: 'teddy',
    date: 2022
    }];
// O(n^2)