let num = [2, 4, 6, 8, 10];
let even = num.every((el) => {
    return (el % 2 == 0);
})
let num2 = [5, 7, 15, 4];
let odd = num2.every((el) => {
    return (el % 2 != 0);
})
let num3 = [2, 4, 6, 5, 10];
let even2 = num3.every((el) => {
    return (el % 2 == 0);
})
let num4 = [2, 4, 8, 5, 10];
let odd2 = num3.every((el) => {
    return (el % 2 != 0);
})