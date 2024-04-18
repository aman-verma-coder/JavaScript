const student = {
    name: "Aman Verma",
    roll: 91,
    city: "Kolkata",
    age: 21,
    username: "amanverma0525",
    password: "adfgh12345"
};
let { username, password } = student;
const student2 = {
    name2: "Affan",
    roll2: 135,
    // city2: "Kolkata",
    age2: 20,
    username2: "mdaffanasghar0525",
    password2: "zxcvb54321"
};
let { name2: naam, city2: sahar = "Bangalore", age2: umar } = student2;