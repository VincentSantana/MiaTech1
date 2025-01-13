//state driven development
const state ={
    count : 0
}


const counter = document.getElementById("counter_display");
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");

inc.addEventListener("click", () => {
    state.count += 1
    render()
});

console.log(state);
dec.addEventListener("click", () => {
    state.count -= 1
    render()
});

const render = () => {
    counter.textContent = state.count;
};

render();