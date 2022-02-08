// The function called isSubsequence takes in two strings 
// and checks whether the characters in the first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first string appear somewhere in the second string, 
// without their order changing.

// Examples:
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)


function isSubsequence(subStr, str) {
    let letterToCheckInd = 0;
    let currentInd = 0;
    while ((letterToCheckInd < subStr.length) || (currentInd < str.length)) {
        if (subStr[letterToCheckInd] === str[currentInd]) {
            if (letterToCheckInd === subStr.length-1) return true; 
            letterToCheckInd++;
        }
        if (currentInd === str.length-1) return false; 
        currentInd++;
    }
    return false;
}

