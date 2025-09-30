const date = document.querySelector(".todolist");
const iddate = document.querySelector(".iddate");
const idname = document.querySelector(".idname");
const idtext = document.querySelector(".idtext");
const savebtn = document.querySelector(".savebtn");

const dati = []; // Aquí se guardan los datos
let editingIndex = null; // para saber si estamos modificando

savebtn.addEventListener("click", function(event) {
    event.preventDefault();

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

        // Poblar el html con la lista
        let li = document.createElement("tr");
        li.innerHTML = `
            <td>${nuovoDato.date}</td>
            <td>${nuovoDato.who}</td>
            <td>${nuovoDato.todo}</td>
            <td>
                <button class="deletebtn">Delete</button>
                <button class="modifybtn">Modify</button>
            </td>
        `;
        date.appendChild(li);
    }

    // Limpiar campos
    iddate.value = "";
    idname.value = "";
    idtext.value = "";

    console.log(dati);
});

// Delegación de eventos (delete y modify)
date.addEventListener("click", function(event) {
    // BORRAR
    if (event.target.classList.contains("deletebtn")) {
        const fila = event.target.closest("tr");
        const index = Array.from(date.children).indexOf(fila);

        fila.remove();
        dati.splice(index, 1);

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
