import { useMemo } from "react";

//
export const useFilteredTodos = (todos, searchTerm) => {
   
    return useMemo(() => {
        //filter es el tipico metodo para filtrar de js
        if (!Array.isArray(todos)) return [];
        return todos.filter(todo =>
            todo.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    
        //los parametros deben ser pasados aqui
    }, [todos, searchTerm]);

    
};