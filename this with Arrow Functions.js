let student = {
    name: 'Aman',
    stream: "ECE",
    roll: 91,
    marks: 98,
    prop: this,                            //Global_Scope
    getName: function () {
        console.log(this);
        return (this.name);
    },
    getRoll: () => {
        console.log(this);     //Parent's Scope => WIndow
        return (this.roll);
    },
    getInfo1: function () {
        setTimeout(() => {
            console.log(this);                  //Student
        }, 2000)
    },
    getInfo2: function () {
        setTimeout(function () {
            console.log(this);                  //Window
        }, 2000)
    }
}