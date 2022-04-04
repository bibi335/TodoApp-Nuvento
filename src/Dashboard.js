import React from 'react';
import './dash.css';
import Navbar from './Navbar';
import Linegraph from './Linegraph';
import Graph from './Graph';
import Gallery from './Gallery';

function Dashboard() {
  return (
    <div>
        <Navbar />
        <h1>Dashboard</h1>
        <div className='graph'> 

    <Linegraph/>
    <Graph/>
</div>
<div className='graph'>
    <Gallery/>
</div>

     



    </div>
  )
}

export default Dashboard