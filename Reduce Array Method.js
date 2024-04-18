let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum_of_nums = arr.reduce((res, el) => {
    console.log(res);
    return (res + el);
});
console.log(sum_of_nums);