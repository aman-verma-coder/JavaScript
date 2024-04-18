let num = [2, 4, 5, 7, 8, 10, 11];
let odd = num.some((el) => {
    return (el % 2 != 0);
})
let even = num.some((el) => {
    return (el % 2 == 0);
})