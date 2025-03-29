import React from 'react'
import { Todo } from '../model'
import SingleTodo from './SingleTodo';

interface Props{
    todos: Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({todos,setTodos}:Props) => {
  return (
    <div className='todos'>
      {todos.map((todo)=>(
        <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
      ))}
    </div>
  )
}

export default TodoList
//=================================
//import { useReducer } from "react";

// type Actions = 
//     | {type:'add', payload:string }
//     | {type:'remove', payload:number }
//     | {type:'done', payload:number }

// const TodoReducer = (state: Todo[], action:Actions) =>{
//     switch (action.type){
//         case 'add':
//             return [
//                 ...state,
//                 {id:Date.now(), todo: action.payload, isDone:false }
//             ]
//         case 'remove':
//             return state.filter((todo)=>todo.id!==action.payload)

//         case 'done':
//             return state.map((todo)=>
//                 todo.id===action.payload?{...todo, isDone:!todo.isDone}:todo
//             )
//         default:
//             return state;
//     }
// }

// const ReducerExample= ()=>{
//     const [state, dispatch] = useReducer(TodoReducer, [])
//     return (
//         <div></div>
//     )
// }