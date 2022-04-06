import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page F2',
    uv: 3590,
    pv: 4400,
    amt: 2100,
  },{
    name: 'Page H',
    uv: 3690,
    pv: 4500,
    amt: 2600,
  },
  {
    name: 'Page I',
    uv: 3425,
    pv: 4354,
    amt: 2250,
  },{
    name: 'Page J',
    uv: 3490,
    pv: 4014,
    amt: 3200,
  },
  {
    name: 'Page K',
    uv: 1190,
    pv: 300,
    amt: 100,
  },
];
function Linegraph() {
    return (
        <div>
             <LineChart
          width={850}
          height={260}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          <Line type="monotone" dataKey="amt" stroke="yellow" />
        </LineChart>
            
        </div>
    )
}

export default Linegraph
