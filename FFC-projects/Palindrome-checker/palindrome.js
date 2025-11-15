function isPalindrome(str) {
 const word = str.toLowerCase().replace(/[^a-z0-9]/gi,"")
 let backward = "";
 
 for (let i = word.length - 1; i >= 0; i--) {
    backward += word[i];
}
if (backward === word) {
    return true;
} else {
        return false
    } 
}

console.log(isPalindrome("Race-car"))
console.log(isPalindrome("Nope"))
console.log(isPalindrome("AnAna"))