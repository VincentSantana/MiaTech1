import { useEffect, useState, useCallback } from "react";

const DEFAULT_OPTIONS = {
    method: "GET",
    headers: {} //se deja vacio para que el usuario pueda agregar mas opciones si es necesario
};

//options son opciones adiconales por ejemplo(headers)
//Si options no se pasa, tomara un objeto vacío {} como valor por defecto
export const useFetch = (url, options = {}) => {
    const finalOptions = {
        ...DEFAULT_OPTIONS,
        ...options,
        headers: { ...DEFAULT_OPTIONS.headers, ...options.headers }
    };

    const [data, setData] = useState(null);//datos recibidos
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);//carga

    //useCallback evita que la funcion cambie en cada render y solo la vuelve a crear si url cambia
    const fetchTodos = useCallback(async () => {
        setLoading(true); //Se activa el estado de carga
        setError(null);//Se limpia cualquier error anterior
        try {
            const res = await fetch(url, finalOptions);
            if (!res.ok) throw new Error("Error during fetch data");

            const dati = await res.json();
            console.log(dati);
            setData(dati);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);//indica que la carga termino
        }
    }, [url]);

    useEffect(() => {
        fetchTodos();
    }, [fetchTodos]);

    //data → Datos obtenidos de la API
    //error → Mensaje de error (si ocurre)
    //loading → true mientras se carga, false cuando termina
    //fetchTodos → Función para volver a cargar los datos manualmente
    return { data, error, loading, fetchTodos };
};
