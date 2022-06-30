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

// const arr1 = ['a','b','c','x'];
// const arr2 = ['z','y','x']; 

// function containsCommonItem(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) { // O(a)
//         for (let j = 0; j < arr2.length; j++) { // O(b)
//             if(arr1[i] === arr2[j]) {
//                 return true;
//             }
//         }
//     }
//     return false;
// } 
// O(a*b)
// console.log(containsCommonItem(arr1, arr2)); // returns true


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
    for (let i = 0; i < arr1.length; i++) {

    }
    // loop through second array and check if item in second array exists on created object
    for (let j = 0; j < arr2.length; j++) {
        
    }
}

//O(a + b)