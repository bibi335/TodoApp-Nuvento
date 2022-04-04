import './App.css';
import React from 'react';
import Todo1 from './Todo1'
import Graph from './Graph'
// import Activate from './Activate'


import Register from './Register';
// import Dashboard from './Dashboard';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
const LazyDashboard = React.lazy(()=>import('./Dashboard'));
function App() {
  return (
    <div className="app">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Register/>}/>
    <Route path="/todo" element={<Todo1/>}/>
    <Route path="/graph"element={<Graph/>}/>
    <Route path="/dash"element={
    <React.Suspense fallback='LOADING>>>'>    
    <LazyDashboard/>
    </React.Suspense>}/>
    {/* <Route path="/activate/:token/:at"element={<Activate/>}/> */}
    </Routes>
    </BrowserRouter>
      

   {/* <Todo1/> */}
   {/* <Todo/> */}
  </div>
  );
}

export default App;
