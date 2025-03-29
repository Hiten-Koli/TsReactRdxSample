import React, { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import { Todo } from './model';
import TodoList from './components/TodoList';


// let name:string;
// let age: number | string;
// let isStudent: boolean;
// let hobbies: string[];
// let role: [number, string]
// // let printName:(name:string)=>void;
// function printName(name:string){
//   console.log(name)
// }
// printName("Hiten")
// type Person ={
//   name:string;
//   age?: number
// }
//  let person:Person={
//   name:"Hiten",
//  }
// let people: Person[];
// interface Person{
//   name:string;
//   age?: number
// }

// type x ={
//   a:string;
//   b:boolean;
// }
// type y=x &{
//   c:number;
//   d:Person;
// }
 
// interface DerivedPerson extends Person {
//   profession:string;
// }

const App:React.FC=() => {

  const [todo, setTodo] = useState<string | number>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e:React.FormEvent)=>{
    e.preventDefault();
    if(todo)
      setTodos([...todos,{id:Date.now(), todo, isDone:false }])
      setTodo('')
  }

  return (
      <div className='App'>
        <span className='heading'>TaskIt</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
  )
}

export default App
