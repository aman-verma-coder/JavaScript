let sum = function (a, b) {
    sum = a + b;
    console.log("The sum is", a + b);
    function innerFunc(a, b) {
        let avg = sum / 2;
        console.log("The average is", avg);
    }
    innerFunc();
}
let a = prompt("Enterthe value of a");
let b = prompt("Enterthe value of b");
a = parseInt(a);
b = parseInt(b);
sum(a, b);
