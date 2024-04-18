let arr =[1,2,3,4,5];
arr.forEach(function(el) {
    console.log(el);
});
arr.forEach((abcd)=>{
    console.log(abcd);
});

let arr2=[
    {
        name:"Aman",
        stream:"ECE",
        roll:91,
        age:21
    },
    {
        name:"Affan",
        stream:"CSE",
        roll:135,
        age:20
    },
    {
        name:"Dream Girl",
        color:"Fair",
        figure:36-24-36,
        age:18-24,
        height:5.5
    }
]
arr2.forEach(function(student) {
    console.log(student);
});
arr2.forEach((kakhagagha)=>{
    console.log(kakhagagha);
});
arr2.forEach(function(student) {
    console.log(student.name);
});
arr2.forEach((kakhagagha)=>{
    console.log(kakhagagha.name);
});