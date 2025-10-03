const date = document.querySelector(".todolist");
const iddate = document.querySelector(".iddate");
const idname = document.querySelector(".idname");
const idtext = document.querySelector(".idtext");
const savebtn = document.querySelector(".savebtn");


const dati = JSON.parse(localStorage.getItem("dati")) || []; // Aquí se guardan los datos
let editingIndex = null; // para saber si estamos modificando



//funcion para renderizar primero lo que ya esta guardado en el array

function renderDati() {
    date.innerHTML = "";

    dati.forEach((dato, index) => {
        const li = document.createElement("tr");
        li.innerHTML = `
            <td>${dato.date}</td>
            <td>${dato.who}</td>
            <td>${dato.todo}</td>
            <td>
                <button class="deletebtn">Delete</button>
                <button class="modifybtn">Modify</button>
            </td>
        `;
        date.appendChild(li);

    });
}

renderDati();

savebtn.addEventListener("click", function (event) {
    event.preventDefault();

    //si los campos estan vacios, no se hace nada
    if(!iddate.value.trim() || !idname.value.trim() || !idtext.value.trim() ){ 
        alert("es necesario completar los campos");
        return; }

    if (editingIndex !== null) {
        // Estamos editando un dato existente
        dati[editingIndex] = {
            date: iddate.value,
            who: idname.value,
            todo: idtext.value
        };

        // Actualizar la fila correspondiente
        const fila = date.children[editingIndex];
        fila.innerHTML = `
            <td>${dati[editingIndex].date}</td>
            <td>${dati[editingIndex].who}</td>
            <td>${dati[editingIndex].todo}</td>
            <td>
                <button class="deletebtn">Delete</button>
                <button class="modifybtn">Modify</button>
            </td>
        `;

        // Guardar en el localStorage
        localStorage.setItem("dati", JSON.stringify(dati));

        editingIndex = null; // salimos del modo edición

    } else {
        // Crear objeto con los datos del formulario
        const nuovoDato = {
            date: iddate.value,
            who: idname.value,
            todo: idtext.value
        };

        // Agregar al array
        dati.push(nuovoDato);

        // Guardar en el localStorage
        localStorage.setItem("dati", JSON.stringify(dati));

        // Actualizar la lista
        renderDati();
    }

    // Limpiar campos
    iddate.value = "";
    idname.value = "";
    idtext.value = "";

    console.log(dati);
});

// creacion de eventos (delete y modify)
date.addEventListener("click", function (event) {
    // BORRAR
    if (event.target.classList.contains("deletebtn")) {
        const fila = event.target.closest("tr");
        const index = Array.from(date.children).indexOf(fila);

        dati.splice(index, 1);
         localStorage.setItem("dati", JSON.stringify(dati));
        renderDati();


        console.log(dati);
    }

    // MODIFICAR
    if (event.target.classList.contains("modifybtn")) {
        const fila = event.target.closest("tr");
        const index = Array.from(date.children).indexOf(fila);

        // Rellenamos los inputs con los valores de la fila
        iddate.value = dati[index].date;
        idname.value = dati[index].who;
        idtext.value = dati[index].todo;

        // Guardamos qué índice estamos editando
        editingIndex = index;
    }
});


