//no matter the number of elements, the number of operations stays the same.

const boxes = [0,1,2,3,4,5];

function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]); // O(1)
    console.log(boxes[1]); // 0(1)
}
logFirstTwoBoxes(boxes); // O(2) <-- this is always rounded down to O(1), the constant amount of time on a graph




