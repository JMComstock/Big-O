function boo(n) {
    for (let i = 0; i < n.length; i++) {
        console.log('boo!');
    }
}

boo([1,2,3,4,5]); // space complexity of O(1)

function arrayOfHiNTimes(n) {
    let hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }
    return hiArray;
}

console.log(arrayOfHiNTimes(6)); // space complexity of O(n)

// you're either adding additional memory or you aren't
// there's a trade off to saving time and saving space.

console.log('sakjdhgfawe'.length); // O(1) in js .... the complexity of this operation depends on the language you are using

