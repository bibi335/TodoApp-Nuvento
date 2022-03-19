import React from 'react'
import{useState}from'react';
 import './Tddo1.css';
function Todo1() {
    const[toDos,setToDos]=useState([])
  const[toDo,setToDo]=useState('');
  const[todoEdit,setTodoedit]=useState(null)
const[editText,setEditText]=useState("")
  const[search,setSearch]=useState('');

  function handleSubmit(e){
    e.preventDefault();
  }
  function editTodo(id){
    const updatedTodo =[...toDos].map((obj)=>{
      if(obj.id===id)
      {
        obj.text= editText;
        console.log(obj.id,obj.text);
      }
      return obj;
    })
    setToDos(updatedTodo);
    setTodoedit(null);
    setEditText("")

  }

  
    return (
        <div className="body">
             <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      {/* <h2>Whoop, it's{ 🌝 ☕ </h2> */}
      
    </div>

      {/* ---------------------------------searchbar-------------------------------------- */}
    <div >
      <form className="input" onSubmit={handleSubmit}>
      <input 
      value={search.inputValue}
      onChange={(e)=>setSearch(e.target.value)}
      type="text"  placeholder="Search"/>
      <i className="fa fa-search"></i>
      </form>
      </div>
   
    {/* --------------------------------Add Task---------------------------- */}
 
    <div className="input">
      <input value={toDo.inputValue}
      onChange={(e)=>setToDo(e.target.value)
          }
       type="text" placeholder="🖊️ Add item..." />
      <i onClick={()=>setToDos([...toDos,{id:Date.now(),text:toDo,status:false}])} className="fas fa-plus"></i>
      
    </div>
    
      {/*---------------------------- Display task-------------------------------------- */}
    <div className="todos">      
    { toDos
    .filter((obj) => 
    {
      if(setSearch==="")
      {
        return obj
      }else if(obj.text.toLowerCase().includes (search.toLowerCase()))
      {
       return obj.text  
      }
    })
    .map((obj)=>{
      return (
      <div className="todo">
        <div className="left">

          <input 
          onChange={(e)=>{
            console.log(e.target.value)
            console.log(e.target.checked)

            setToDos(toDos.filter(obj2=>{
              if(obj2.id===obj.id){
                obj2.status =e.target.checked
              }
              return obj2
            }))
          }}
          value={obj.status}type="checkbox" name="" id="" />
          <p>{obj.text}</p>
          {todoEdit===obj.id ?
          (<div   className="left">
          
          <input style={{width:"90%"}}
          className="input"          
            type="text"
          value={editText}
          onChange={(e)=>setEditText(e.target.value)}
          /></div>):null}
        </div>
        <div className="right">

          

          {/* ----------------------submit Edit----- */}
          {todoEdit===obj.id ? (
            <i onClick={()=>editTodo(obj.id)}
            className="fa fa-plus" > </i>
          ): 
       
            // ---------------edit------------------
         (
          <i onClick={()=>setTodoedit(obj.id)}          
          className="fa-solid fa-pen"></i>
            )
          }

          {/*---------------- Delete--------------------  */}
          
          <i onClick={(e) =>{
            setToDos(toDos.filter(obj2=>obj2.id !== obj.id ))
          }}
          className="fas fa-times"></i>
        </div>
      </div>)})}
      <h1>Completed Task</h1>
      { toDos.map((obj)=>{
        if(obj.status){
          return(
          <div>
           
            <ul>
              <li><h3>{obj.text}</h3></li>

            </ul>


          </div>);
        }
        return null;
      })}
    </div>
            
</div>
    )
}

export default Todo1
