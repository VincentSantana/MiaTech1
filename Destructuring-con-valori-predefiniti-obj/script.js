const persona = {
    nome: "Vincent",
    età: 27,
    città: "Barahona"
};

const { nome, età, città, professione = "cuoco" } = persona;

console.log(nome); 
console.log(età);  
console.log(città);
console.log(professione);