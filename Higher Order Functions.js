function multipleCallingFunction(greet,n) {
    for (let i = 0; i < n; i++) {
        greet();
    }
}

let greet= function() {
    console.log("Namaste");
    console.log("Hello");
}

let n=prompt("Enter the value of n:");
n= parseInt(n);

multipleCallingFunction(greet,n);