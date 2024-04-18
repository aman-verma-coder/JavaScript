function printNum(n) {
    console.log(`Printing the numbers from 1 to ${n}`);
    for (let i = 1; i <=n; i++) {
        console.log(i);
    }
}
let p=prompt("Enter a number");
printNum(p);