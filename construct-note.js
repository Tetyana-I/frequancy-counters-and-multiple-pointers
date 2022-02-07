// The function costructNote, which accepts two strings, a message and some letters. 
// The function returns true if the message can be built with the letters that you are given;
// otherwise, it returns false.
// Examples:
// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true

function constructNote(message,letters) {
    const letterFrequancy = new Map();
    for (let letter of letters) {
        if (letterFrequancy.get(letter)) {
            letterFrequancy.set(letter,  letterFrequancy.get(letter)+1)
        } else letterFrequancy.set(letter, 1);
    }
    for (let letter of message) {
       let lettersRemained = letterFrequancy.get(letter);  
       if (!lettersRemained) return false;       
       if (lettersRemained <= 0) return false;
       letterFrequancy.set(letter, lettersRemained-1); 
    }
    return true;
}
