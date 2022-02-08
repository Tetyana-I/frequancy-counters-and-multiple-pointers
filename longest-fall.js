// longestFall
// The function called longestFall, which accepts an array of integers, 
// and returns the length of the longest consecutive decrease of integers.

// Examples:
// longestFall([5, 3, 1, 3, 0]) // 3, 5-3-1 is the longest consecutive sequence of decreasing integers
// longestFall([2, 2, 1]) // 2, 2-1 is the longest consecutive sequence of decreasing integers
// longestFall([2, 2, 2]) // 1, 2 is the longest consecutive sequence of decreasing integers
// longestFall([5, 4, 4, 4, 3, 2]) // 3, 4-3-2 is the longest
// longestFall([9, 8, 7, 6, 5, 6, 4, 2, 1]) // 5, 9-8-7-6-5 is the longest
// longestFall([]) // 0

function longestFall(arr) {
    let longest = 1;
    let currLength = 1;
    if (arr.length === 0) return 0;
    for (let i=0; i < arr.length-1; i++) {
        if (arr[i]>arr[i+1]) {
             currLength++;
             if (currLength > longest) longest = currLength;
         } else {
             currLength = 1;
         }   
     }
    return longest;
}

