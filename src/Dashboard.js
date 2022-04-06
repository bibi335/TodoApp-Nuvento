import React from 'react';
import './dash.css';
import Navbar from './Navbar';
import Linegraph from './Linegraph';
import Graph from './Graph';
import Gallery from './Gallery';

function Dashboard() {
  return (
    <div>
      {/* Dashboard */}
        <Navbar />
        <h1>Dashboard</h1>
        <div className='graph'> 
{/* line graph */}
    <Linegraph/>
    {/* Bar graph */}
    <Graph/>
</div>
<div className='graph'>
  {/* Gallery */}
    <Gallery/>
</div>

     



    </div>
  )
}

export default Dashboard