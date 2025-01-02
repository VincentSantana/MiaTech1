const darkMode = document.querySelector("#pulsante");

darkMode.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
});