const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("fname").value;
    const surname = document.getElementById("lname").value;
    if (name === "" && surname === "") {
        alert("Compila tutti i campi");
    } else {
        form.submit();
    }
    
});
