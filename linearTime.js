const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(10000).fill('nemo');

//ES5
function findNemo(array) {

    // Big O Notation of O(n) --> Linear Time 
    // the number of elements in an array increase and the number of operations increase in a for loop ... (linear)
    for (let i = 0; i < nemo.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
        }
    }
}

findNemo(large);