/*Add up the Numbers from a Single Number
addUp(4) ➞ 10
addUp(13) ➞ 91
addUp(600) ➞ 180300
*/

// Add numbers upto n

function addUp(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));
