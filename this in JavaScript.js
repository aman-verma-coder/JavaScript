let student = {
    name: "Aman Verma",
    stream: "ECE",
    sec: "A",
    roll: "91",
    eng: 95,
    maths: 98,
    science: 92,
    getAvg() {
        let Avg = (this.eng + this.maths + this.science) / 3
        console.log(Avg);
    }
}