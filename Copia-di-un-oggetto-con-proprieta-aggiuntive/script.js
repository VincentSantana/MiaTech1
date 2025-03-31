const persona = {
    nome: "Vincent",
    età: 27,
    città: "Lurate Caccivio"
};

const personaModificata = {
    ...persona,
    professione: "Sviluppatore"
};

console.log("Oggetto originale:", persona);

console.log("Copia modificata:", personaModificata);