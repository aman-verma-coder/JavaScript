let arr=[6,85,32,8,6,4,4,58,85,74,78,8,5,,564,849,15,48,8,2,48,98,261,548,98,32,6,87,65,31,984,987,15,45978,654,56,65,52,5,];
let n=prompt("Enter a number");
n=parseInt(n);
for (let i = 0; i < arr.length; i++) {
    if (arr[i]>n) {
        console.log(arr[i]);
    }
    
}