const date = document.querySelector(".todolist");
const iddate = document.querySelector(".iddate");
const idname = document.querySelector(".idname");
const idtext = document.querySelector(".idtext");
const savebtn = document.querySelector(".savebtn");

const dati = []; // Aquí se guardan los datos

savebtn.addEventListener("click", function(event) {
    event.preventDefault();

    // Crear objeto con los datos del formulario
    const nuovoDato = {
        date: iddate.value,
        who: idname.value,
        todo: idtext.value
    };

    // Agregar al array
    dati.push(nuovoDato);

    //poblar el html de con la lista
    let li = document.createElement("tr");
    li.innerHTML = 
    `<td> ${nuovoDato.date}</td>
     <td>${nuovoDato.who}</td>
    <td>${nuovoDato.todo}</td>`;

    date.appendChild(li);

    // Limpiar campos
    iddate.value = "";
    idname.value = "";
    idtext.value = "";


    console.log(dati);
});
