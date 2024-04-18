let arrayAverage = function () {
    let arr = [];
    let toAdd = prompt("Enter the number:                                                                      Enter '0.0' to Calculate Average");
    toAdd = parseInt(toAdd);
    while (true) {
        if (toAdd == 0.0) {
            console.log("Calculating Average");
            break;
        }
        else if (toAdd = parseInt(toAdd)) {
            console.log("Adding the number to the array");
            arr.push(toAdd);
        }
        else{
            console.log("Wrong Input");
        }
        toAdd = prompt("Enter the number:                                                                      Enter '0.0' to Calculate Average");
        toAdd = parseInt(toAdd);
    }
    let len = (arr.length)-1;
    for (let i = 1; i <=len; i++) {
        var sum = 0;
        arr[i]=parseInt(arr[i]);
        sum = (sum + arr[i-1]);
    }
    let ans = (sum / len);
    console.log(`The average of ${arr} is ${ans}`);
}
arrayAverage();