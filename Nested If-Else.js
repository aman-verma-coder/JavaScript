let marks = 85;
if (marks >= 33) {
    console.log("Passed");
    if (marks >= 80) {
        console.log("Grade: O");
    }
        else if(marks >= 60) {
            console.log("Grade: A")
        } else {
            console.log("Grade: P")
        }
}
else{
    console.log("Better Luck! Next Time.")
}