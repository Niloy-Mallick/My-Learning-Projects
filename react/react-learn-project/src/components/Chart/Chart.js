import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css'

export default function Chart(props) {
    console.log(props.dataPoints);
    const dataPointValues = props.dataPoints.map(
        dataPoint => {
            return dataPoint.value;
        }
    )
    const totalMax = Math.max(...dataPointValues);
    console.log('totalMax:'+totalMax);

    return ( 
    <div className='chart'>
        {props.dataPoints.map(dataPoint => {
            return (
            <ChartBar
                key={dataPoint.label} 
                value = {dataPoint.value}
                maxValue = {totalMax}
                label = {dataPoint.label}/>
            )
        })}
    </div>
    );
}