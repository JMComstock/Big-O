// TODO: Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items

// For Example:
// const array1 = ['a','b','c','x'];
// const array2 = ['z','y','i'];
// should return false.
// -----------------------------------
// const array1 = ['a','b','c','x'];
// const array2 = ['z','y','x']; 
// should return true.

// 2 parameters - arrays - no size limit on the array
// return a boolean

// can be solved with 2 for loops which is O(n^2) which is not very effecient at all - brute force method

const array1 = ['a','b','c','x'];
const array2 = ['z','y','x']; 

function containsCommonItem(array1, array2) {
    for (let i = 0; i < array1.length; i++) { // O(a)
        for (let j = 0; j < array2.length; j++) { // O(b)
            if(array1[i] === array2[j]) {
                return true;
            }
        }
    }
    return false;
} 
// O(a*b)
// O(1) - Space Complexity
console.log(containsCommonItem(array1, array2)); // returns true


const arr1 = ['a','b','c','x'];
const arr2 = ['z','y','x']; 

// arr1 ==> object {
// a: true,
// b: true,
// c: true,
// x: true   
// }
// arr2[index] === obj.properties

function containsCommonItem2(arr1, arr2) {
    // loop through first array and create object where properties === items in the array
    // can we assume always 2 parameters?

    let map = {};
    for (let i = 0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
        }
    }
    // loop through second array and check if item in second array exists on created object
    for (let j = 0; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            return true;
        }
    }
    return false;
}
containsCommonItem2(arr1, arr2);
//O(a + b)
// O(a) Space Complexity


function containsCommonItem3 (a1, a2) {
    return a1.some(item => a2.includes(item));
}
containsCommonItem3(arr1, arr2);



// Naive 
function hasPairWithSum(arr, sum) {
    var len = arr.length;
    for (var i = 0; i<len-1; i++) {
        for(var j = i+1; j<len; j++) {
            if (arr[i] + arr[j] === sum) {
                return true;
            }
        }
    }
    return false;
}

// Better
function hasPairWithSum2(arr, sum) {
    const mySet = new Set();
    const len = arr.length;
    for(let i = 0; i < len; i++) {
        if (mySet.has(arr[i])) {
            return true;
        }
        mySet.add(sum - arr[i]);
    }
    return false;
}
hasPairWithSum2([6,4,3,2,1,7], 9);