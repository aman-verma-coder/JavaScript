// {
//     let a = 10;                Block Scope
// }
// console.log(a);

// {
//     let b = 10;                Block Scope
// }
// console.log(b);

// {
//     var c = 5;
//     console.log(c);      Not a Block Scope
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);

let age=20;
if (age>=18) {
    var str= "Adult";
    console.log(str);
}

console.log(str);
