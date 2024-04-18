// const favSong = "What Jhumka";
// let guess = prompt("Guess my favorite song");
// while ((guess != favSong) && (guess != "quit")) {
//     prompt("Wrong Guess. Try Again.");
// }
const favSong = "What Jhumka";
let guess = prompt("Guess my favorite song");
while (guess != favSong) {
    if (guess == "quit") {
        console.log("You Quit");
        break;
    }
    guess = prompt("Wrong Guess. Try Again.");
}