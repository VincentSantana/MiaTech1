const students = [
    {nome: "Vincent", grade: 80},
    {nome: "Manuel", grade: 60},
    {nome: "Victor", grade: 90},
    {nome: "Luis", grade: 50}
];

let passedStudents = students.filter(student => student.grade >= 60 )

console.log(passedStudents)

let trovastudent = students.find(student => student.grade < 60)

console.log(trovastudent)
