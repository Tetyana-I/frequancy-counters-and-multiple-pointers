// The function called sameFrequency. Given two positive integers, 
// finds out if the two numbers have the same frequency of digits.

// Examples:
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(int1, int2) {
    let intString1 = int1.toString();
    let intString2 = int2.toString();
    if (intString1.length !== intString2.length) return false;
    const intFreq1 = {};
    for (let digit of intString1) {
        !intFreq1[digit] ? intFreq1[digit] = 1 : intFreq1[digit] = intFreq1[digit] + 1;
    }
    for (let digit of intString2) {
        if (!intFreq1[digit]) return false
        else if (intFreq1[digit] <=0) return false;
        intFreq1[digit]--;   
    }
    return true;
}

