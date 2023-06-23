// Empty an Array

let a = [1, 2, 3, 4, 5];
while (a.length > 0) {
    a.pop();
}
console.log(a); // []

//Setting its length to zero will clear it out.

let b = [1, 2, 3, 4, 5];
b.length = 0;
console.log(b); // []

