async function obtenerProductos() {
    try {
        const res = await fetch('https://dummyjson.com/products');
        const data = res.json();
       
        console.log(data);
    } catch (error) {
        console.error(error)
    }
};

obtenerProductos();
