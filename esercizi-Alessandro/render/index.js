//fare dei box uno sooto l'altro, lista to do una check box sulla sinistra e il titolo a destra se la to do e segnata come completed la checkbox e check data e il testo del titolo e tagliato//

const API_URL = "https://jsonplaceholder.typicode.com/todos";

// 1.0

const $boxContainer = document.querySelector(".boxContainer");

// 2.0

const state = {
    data: null,
};

//3.0 salvare i dati nello state

const fetchData = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        state.data = data;
    } catch (error) {
        console.log(error);
    }
};

// 4.0 funzione render
const render = () => {
    const HTML = state.data.map((item) => {
        return `
        <label class="${item.completed ? "completed" : ""}">
        <input class="check_box" type="checkbox" ${item.completed ? "checked" : ""} />
        <span class="title">${item.title}</span>
        </label>
        `;
    }).join("");

    $boxContainer.innerHTML = HTML;
}

// 5.0 funzione init

const init = async () => {
    await fetchData();
    render();
};

init();