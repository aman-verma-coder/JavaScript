let arr = [1, 5, 5, 87, 4, 84, 8, 32, 41, 7, 6, 65, 5, 6, 4, 2, 41, 5, 1, 20, 2, 1, 1, 4, 72, 3];
let odd = arr.filter((el) => {
    return (el % 2 != 0);
})
let even = arr.filter((el) => {
    return (el % 2 == 0);
})
let num_less_then_10 = arr.filter((el) => {
    return (el < 10);
})