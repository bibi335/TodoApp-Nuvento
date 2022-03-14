import React from 'react'
import {useState} from'react'
import './style.css';


function Todo() {
const[todos,setTodos]=useState([]);
const[todo,setTodo]=useState("");
const[todoEdit,setTodoedit]=useState(null)
const[editText,setEditText]=useState("")
const[search,setSearch]=useState("")


function handleSubmit(e) {
e.preventDefault();

const newTodo = {
    id:new Date().getTime(),
    text:todo,
    complete:false
}
setTodos([...todos].concat(newTodo));
setTodo("");

}
// function searchTask(text) {
//     const updateTask =[...search].filter((text) => {
    
//         if(todo.text === text)
//         {
//             todo.text = search;
//             alert("task"+todo.text);
//         }
//     })
//     setSearch(updateTask);
//     setSearch("")
//     }
    
function deleteTodo(id){
const updatedTodo =[...todos].filter((todo) => todo.id!== id)
setTodos(updatedTodo)
}
function toggleComplete(id){
const updatedTodo =[...todos].map((todo)=>{
if(todo.id===id)
{
    todo.completed= !todo.completed
}
return todo
})
setTodos(updatedTodo)

}
function editTodo(id){
const updatedTodo =[...todos].map((todo)=>{
if(todo.id===id){
    todo.text=editText;
    

 
}
return todo;

})
setTodos(updatedTodo);
setTodoedit(null);
setEditText("")

}

  return (
    <div>
        <div>


        <form onSubmit={handleSubmit}>
    <input
    onChange={(e) => setTodo(e.target.value)}
    value={todo.inputValue}
    type="text" required="required" />
    <button type="submit"  >Add</button>
    <br/>
    <input 
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
    type="text"/>
    <button >Search</button>

   
    </form>
        </div>
  
    
    {todos
   .filter((obj)=>{
    if(setSearch==="")
    {
      return obj
    }else if(obj.text.toLowerCase().includes (search.toLowerCase()))
    {
     return obj.text  
    }


  })
    
    .map((todo)=><div key={todo.id} >

   {todoEdit=== todo.id ? (<input
    value={editText.inputValue}
    onChange={(e)=>setEditText(e.target.value)}
     type="text" required="required"/>):(  <div>{todo.text}</div>)} 

    <input type="checkbox"
    
    onChange={()=>toggleComplete(todo.id)}
    checked={todo.completed}
    />
    
    
    <button onClick={()=>deleteTodo(todo.id)}>Delete</button >
  {todoEdit=== todo.id?( <button onClick={()=>editTodo(todo.id)
}>submit</button>):
  (<button onClick={()=>setTodoedit(todo.id)}>Edit</button>)}
    </div>)}
        <div>
            
        </div>

    </div>
  )
}

export default Todo