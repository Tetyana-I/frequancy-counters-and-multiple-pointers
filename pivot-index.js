// The function called pivotIndex which accepts an array of integers, 
// and returns the pivot index where the sum of the items to the left equal to the sum of the items to the right.
// If there are more than one valid pivot index, return the smallest value.

// Examples:
// pivotIndex([1,2,1,6,3,1]) // 3
// pivotIndex([5,2,7]) // -1  no valid pivot index
// pivotIndex([-1,3,-3,2]) // 1 valid pivot at 2: -1 + 3 = 2 however there is a smaller valid pivot at 1: -1 = -3 + 2

function pivotIndex(arr) {
    if (arr.length < 3) return -1;
    let sumLeft = arr[0];
    let pivot = 1;
    let sumRight = arr[2];
    
    let i = pivot+1;
    while ((pivot < arr.length-1) && (i < arr.length)) {
        if ((sumLeft > sumRight)) {
            i++;
            sumRight = sumRight + arr[i];
        };
        if (sumLeft < sumRight) {
            sumLeft = sumLeft + arr[pivot];
            pivot++;
            i=pivot+1;
            sumRight = arr[i];
        }
        if ((sumLeft === sumRight) && (i === (arr.length-1))) return pivot;
        if ((sumLeft === sumRight) && (i !== (arr.length-1))) {
            console.log("left = right else");
            sumLeft = sumLeft + arr[pivot];
            pivot++;
            i=pivot+1;
            sumRight = arr[i];
        }
    }
    return -1;
}