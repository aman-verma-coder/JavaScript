let country = prompt("Enter the name of Country");
let list = [];
var count = [];
while (true) {
    if (country == "Quit") {
        console.log("Quitting");
        break;
    }
    else {
        console.log("Adding the Country to the list");
        list.push(country);
    }
    country = prompt("Again enter the name of Country");
}
for (let i = 0; i < list.length; i++) {
    count.push(0);
    count[i] = parseInt(count[i]);
}
let request = prompt("Enter A to print name of all the country, B to print the longest name of the Country and C to exit");
if (request == "A") {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
}
else if (request == "B") {
    for (let i = 0; i < list.length; i++) {
        let curCounLen = list[i].length;
        curCounLen = parseInt(curCounLen);
        for (let j = 0; j < list.length; j++) {
            otherCounLen = list[j].length;
            otherCounLen = parseInt(otherCounLen);
            if (curCounLen > otherCounLen) {
                count[i] = count[i] + 1;
            }
        }
    }
    var maximum = Math.max.apply(null,count);
    var mainindex = count.indexOf(maximum);
    console.log(list[mainindex]);
}
else if (request == "C") {
    console.log("Quitting");
}
else {
    console.log("Wrong Request");
}