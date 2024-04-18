let sum =50;             //Global Scope
function calSum(a,b) {
    let sum=a+b;
    console.log(sum);  //Function Scope
}
calSum(5,10);
console.log(sum);