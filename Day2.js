
function power(x, n) {
    if (n == 0) {
        return 1;
    }
  if (x == 0){ 
            return 0;
}
    return x * power(x, n - 1);
}

console.log(power(2, 4)); // 16
console.log(power(2, 3)); // 8
console.log(power(2, 2)); // 4 
console.log(power(2, 1)); // 2
console.log(power(2, 0)); // 1
