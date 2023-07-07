let hcf;

const num1 = prompt('Enter a first positive integer: ');
const num2 = prompt('Enter a second positive integer: ');

for (let i = 1; i <= number1 && i <= number2; i++) {

    if( num1 % i == 0 && num2 % i == 0) {
        hcf = i;
    }
}

console.log(`HCF of ${num1} and ${num2} is ${hcf}.`);
