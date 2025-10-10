let numeroDia = prompt("Ingresa un numero del 1 al 7");

switch (numeroDia) {
    case "1":
        document.write("<h1>Lunes</h1>");
        break;
    case "2":
        document.write("<h1>Martes</h1>");
        break;
    case "3":
        document.write("<h1>Miercoles</h1>");
        break;
    case "4":
        document.write("<h1>Jueves</h1>");
        break;
    case "5":
        document.write("<h1>Viernes</h1>");
        break;
    case "6":
        document.write("<h1>Sabado</h1>");
        break;
    case "7":
        document.write("<h1>Domingo</h1>");
        break;
    default:
        document.write("<h1>No es un dia de la semana</h1>");
        break;
}