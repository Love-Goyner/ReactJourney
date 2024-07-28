import React,  { useContext } from "react"

export const TodoContext = React.createContext({
    todos : [
        {
            id: 1,
            todoMssg : "this is todo",
            check: false
        }
    ],
    addTodo : (todoMssg) => {},
    editTodo: (id, todoMssg) => {},
    deleteTodo: (id) => {},
    toggleCheck: (id) => {}

})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}