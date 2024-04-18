let arr = [5, 4, 5, 5, 96, 54, 5, 656, 49, 5, 658, 54, 455, 5, 5, 5];
let finalMax = arr.reduce((max, el) => {
    if (max > el) {
        return max;
    }
    else {
        return el;
    }
})
console.log(finalMax);