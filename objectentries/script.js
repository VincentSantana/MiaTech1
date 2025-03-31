let student = {
    nome  : "Vincent",
    age   : 27,
    grade : "superiore",
    school: "magistri"
}

console.log(Object.entries(student))

for (let key in student) {
    console.log(`${key}: ${student[key]}`);
    }