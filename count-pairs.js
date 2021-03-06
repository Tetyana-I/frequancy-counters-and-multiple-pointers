// countPairs
// Given an array of integers, and a number, 
// finds the number of pairs of integers in the array whose sum is equal to the second parameter.
// We can assume that there will be no duplicate values in the array.

// Examples:
// countPairs([3,1,5,4,2], 6) // 2 (1,5 and 2,4)
// countPairs([10,4,8,2,6,0], 10) // 3 (2,8, 4,6, 10,0)
// countPairs([4,6,2,7], 10) // 1 (4,6)
// countPairs([1,2,3,4,5], 10) // 0
// countPairs([1,2,3,4,5], -3) // 0
// countPairs([0,-4],-4) // 1
// countPairs([1,2,3,0,-1,-2],0) // 2

function countPairs(arr, sum) {
    let arrSet = new Set(arr);
    let pairs = 0;
    // for each element in a set, delete one and check if sum - this element is in the set
    arr.forEach(element => {
        arrSet.delete(element);
        if (arrSet.has(sum-element)) pairs++; 
    });
    return pairs;
}