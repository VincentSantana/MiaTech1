function saludos(){
    document.write("hola, mi nombre es Vincent Santana <br>");
}

saludos();// debemos llamar la funcion para que funcione

//podemos usar tambien un parametro para la funcion
function saludar(nombre){
    document.write("hola, mi nombre es:" + nombre + "<br>");
}

saludar("Vincent Santana");
saludar("");

//podemos usar tambien una definicion para el parametro
function saludar1(nombre1 = "Nicole"){
    document.write("hola, mi nombre es: " + nombre1);
};

saludar1();//por default es Nicole aunque nadie ingrese nada