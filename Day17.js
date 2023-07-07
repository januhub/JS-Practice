let hcf;

const num1 = prompt('Enter a first positive integer: ');
const num2 = prompt('Enter a second positive integer: ');

for (let i = 1; i <= num1 && i <= num2; i++)
{
 if( num1 % i == 0 && num2 % i == 0) {
        hcf = i;
    }
}
let lcm = (number1 * number2) / hcf;

console.log(`LCM of ${number1} and ${number2} is ${lcm}.`);
