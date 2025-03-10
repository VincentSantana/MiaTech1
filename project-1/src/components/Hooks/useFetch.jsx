import { useEffect, useState, useCallback } from "react";

const DEFAULT_OPTIONS = {
    method: "GET",
    headers: {},
    data: {}
};

export const useFetch = (url, options = DEFAULT_OPTIONS) => {
    options = {
        ...DEFAULT_OPTIONS,
        ...options,
        headers: { ...DEFAULT_OPTIONS.headers, ...options.headers },
        data: { ...DEFAULT_OPTIONS.data, ...options.data }
    };

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchTodos = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const res = await fetch(url, options);
            if (!res.ok) throw new Error("Error during fetch data");

            const dati = await res.json();
            console.log(dati);
            setData(dati);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, [url, options]);

    useEffect(() => {
        fetchTodos();
    }, []);

    return { data, error, loading, fetchTodos };
};
