const vowels = ["a", "e", "i", "o", "u"]
function countVowel(str) {
    // initialize count
    let count = 0;
        for (let letter of str.toLowerCase()) {
            if (vowels.includes(letter)) {
                count++;
            }
        }
    // return number of vowels
    return count
}
// take input
const string = prompt('Enter a string: ');
const result = countVowel(string);
console.log(result);
