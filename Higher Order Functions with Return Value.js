function oddOrEvenFactory(request) {
    if (request == "odd") {
        let odd = function (n) {
            console.log(!(n % 2 == 0));
        }
        return odd(n);
    }
    else if (request == "even") {
        let even = function (n) {
            console.log(n % 2 == 0);
        }
        return even(n);
    }
    else {
        console.log("Invalid Reques");
    }
}
let request = prompt("Enter the request");
let n = prompt("Enter the value of n");
oddOrEvenFactory(request);