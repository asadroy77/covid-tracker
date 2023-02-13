import React from 'react';
import "./dataChart.css";
import {ResponsiveContainer,BarChart,Bar,XAxis,YAxis} from "recharts";


const pdata = [
    { name:'confirmed',
    patients:16873
},
{
    name:'deaths',
    patients:1273  
},
{
    name:'recovered',
    patients:873 
}

]

export const DataChart = () => {
  return(<>
        <ResponsiveContainer className='con' width="70%" aspect={3} >
            <BarChart data={pdata}
            barSize={160 } 
            >
            <XAxis dataKey="name" tick={{ fontFamily: 'Poppins' }} stroke="black" ></XAxis>
            <YAxis stroke="black"></YAxis>
            <Bar dataKey="patients" fill= "#8884d8" background= {{ fill: '#eee' }}></Bar>
           
            
            </BarChart>
        </ResponsiveContainer>
    </>)
}

