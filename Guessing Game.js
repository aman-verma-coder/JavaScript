let maxno = prompt("Enter the max number");
let ans= Math.floor(maxno*(Math.random())+1);
let guess=prompt("Guess the number");
while (true) {
    if (guess=="Exit") {
        console.log("You have been successfully exited");
        break;
    }
    if (guess==ans) {
        console.log("Your guess is",guess,"and it is correct");
        break;
    }
    else if (guess<ans) {
        guess=prompt("Your guess is lesser. Try again");
    }
    else if (guess>ans) {
        guess=prompt("Your guess is Greater. Try again");
    }
}