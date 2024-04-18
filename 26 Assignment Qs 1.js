let arr = [54, 6, 4, 56, 8, 3, 1, 2, 74, 8, 6, , 7, 6, 5];
let square = arr.map((arr) => arr * arr);
let sum = square.reduce((abcd, efgh) => {
    return (abcd + efgh);
});
let avg=sum/(arr.length);