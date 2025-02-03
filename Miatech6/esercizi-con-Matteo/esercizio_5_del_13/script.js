const btnStartTimer = document.getElementById("start-timer");
const timerDisplay = document.getElementById("timer-display");
const pasta = document.getElementById("pasta");
const pot = document.getElementById("pot");

const state = {
    timer: 60,
    isPastaReady: false,
    isPastaCooking: false
};



btnStartTimer.addEventListener("click", () => {
    setInterval(() => {
        if (state.timer > 0) {
            state.timer--;
            render();
            pastaReady();
        } else {
            clearInterval(); // Ferma il timer quando arriva a 0
        }
    }, 1000);


    state.isPastaCooking = true
    render()
    pastaReady()
});

function pastaReady() {
    if (state.timer === 0) {
        state.isPastaReady = true //aggiorna il valore di ready a true
        pasta.style.display = "block"
        pot.style.display = "none"
    }
}

function render() {
    if (state.isPastaCooking) {
        timerDisplay.style.display = "block"
        timerDisplay.innerHTML = state.timer
    };

}