import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers : {
        addTodo : (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            localStorage.setItem("todos", JSON.stringify(state.todos));

        },
        setTodo : (state, action) => {
            state.todos = action.payload
        }
    }
})

export const {addTodo, removeTodo, setTodo} = todoSlice.actions

export default todoSlice.reducer 