import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

const Todo = props => {

    const [todoName, setTodoName] = useState("");
    const [todoList, setTodoList] = useState([]);
    // const [todoState, setTodoState] = useState({userInput: "", todoList: []})
    const todoListReducer = (state, action) =>{
        switch(action.type){
            case 'ADD':
                return state.concat(action.payload);
            case 'SET':
                return action.payload;
            case 'REMOVE':
                return state.filter(todo => todo.id !== action.payload);
            default:
                return state 
        }
    }

    useEffect(() => {
        // axios.get()
        dispatch({type: 'ADD', payload: []})
    },[]);

    const [todoListR, dispatch] = useReducer(todoListReducer, [], )


    const inputChangeHandler = (e) => {
        setTodoName(e.target.value);
        // setTodoState({userInput: e.target.value, todoList: todoState.todoList})
    };

    const todoAddHandler = () => {
        setTodoList(todoList.concat(todoName));
        // setTodoState({userInput: todoState.userInput,todoList: todoState.todoList.concat(todoState.userInput)})
        // axios.post('')
    }

    return <React.Fragment>
         <input type="text" placeholder="Todo" onChange={inputChangeHandler} value={todoName}/>
         <button type="button" onClick={todoAddHandler}>Add</button>
        <ul>
            {todoList.map(todo => (
                <li key={todo}>{todo}</li>
            ))}
        </ul>
    </React.Fragment>
}

export default Todo;