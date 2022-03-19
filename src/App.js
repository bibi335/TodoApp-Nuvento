import './App.css';
import Todo1 from './Todo1'
import Todo from './Todo';
import Register from './Register';
import {BrowserRouter,Route, Routes} from 'react-router-dom';


function App() {
  
  
  return (
    <div className="app">

    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Register/>}/>
    <Route path="/todo" element={<Todo1/>}/>


    </Routes>
    
    </BrowserRouter>

{/* 
   <Todo1/> */}
   {/* <Todo/> */}
  </div>
  );
}

export default App;
