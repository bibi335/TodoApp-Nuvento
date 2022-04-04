import React from 'react';
import Navbar from './Navbar';

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
{name: 'Page B', uv: 410, pv: 2410, amt: 2410},
{name: 'Page C', uv: 420, pv: 2420, amt: 2420},
{name: 'Page D', uv: 430, pv: 2430, amt: 2430},
{name: 'Page E', uv: 440, pv: 2440, amt: 2440},
{name: 'Page F', uv: 850, pv: 2500, amt: 2205},
{name: 'Page G', uv: 620, pv: 2200, amt: 2700},
{name: 'Page H', uv: 820, pv: 2000, amt: 2120},


];

function Graph() {
    return (
        <div>
   
    <BarChart width={930} height={600} data={data}>
    <XAxis dataKey="name" stroke="white" />
    <YAxis />
    <Tooltip wrapperStyle={{ width: 100, backgroundColor: 'yellow' }} />
    <Legend width={100} wrapperStyle={{ top:5, right:10, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="pv" fill="#8884d8" barSize={30} />
    <Bar dataKey="uv" fill="grey" barSize={30} />
    <Bar dataKey="amt" fill="orange" barSize={30} />


    </BarChart>
            
    </div>
    )
}

export default Graph
