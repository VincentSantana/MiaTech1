/* form con login imput email e imput password un submit 
con javascript intercettare l'invio del form ed evitare che aggiorni la pagina
una volta fatta il submit dobbiamo 

fare console.log che avra email e password
*/

//importare i valori
const $form = document.querySelector("#Sezioneinizio");
const $email = document.querySelector("#email");
const $password = document.querySelector("#password");

// inizia lo state
let Login = {
    email: "",
    password: ""
};

// reindirizzazione dei dati
$form.addEventListener("submit", function(event) {
    event.preventDefault();
    Login.email = $email.value;
    Login.password = $password.value;
    
    console.log(Login);
})
