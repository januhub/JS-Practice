// a function which will print based on n 
// 1 => a
// 2 => abb
// 3 => abbccc

function printPattern(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        let char = String.fromCharCode(64 + i);
        let temp = char.repeat(i);
        str += temp;
    }
    console.log(str);
}
printPattern(26);
