import React from 'react';

import { Bar, Pie } from 'react-chartjs-2';

import styles from './Charts.module.css';
const Charts = ({data: {confirmed, deaths}}) => {
    if (!confirmed || !deaths){
        return 'Please wait, loading data...'
    }
    
    const lineChart = (
        
        <Bar
            data = {{
                labels: ["COVID-19(SARS-CoV-2)", "H1N1()", "SARS (SARS-CoV)", "Ebola()", "MERS(MERS-CoV)"],
                datasets: [{
                    data: [confirmed.value, 760630000, 8096, 33577, 2494],
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                }, {
                    data: [deaths.value, 284500, 774, 13562, 858],
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                }],
            }}
            options = {{ scales: {
                yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Population',
                },
                type: 'logarithmic',
                position: 'left',
                ticks: {
                     min: 1, //minimum tick
                     max: 1000000000, //maximum tick
                     callback: function (value, index, values) {
                         return Number(value.toString());//pass tick values as a string into Number function
                     }
                     
                },
                afterBuildTicks: function (chartObj) { //Build ticks labelling as per your need
                    chartObj.ticks = [];
                    chartObj.ticks.push(1);
                    chartObj.ticks.push(10);
                    chartObj.ticks.push(100);
                    chartObj.ticks.push(1000);
                    chartObj.ticks.push(10000);
                    chartObj.ticks.push(100000);
                    chartObj.ticks.push(1000000);
                    chartObj.ticks.push(10000000);
                    chartObj.ticks.push(100000000);
                    chartObj.ticks.push(1000000000);
                }
            }]}}}
            
        /> 
    )
    const pieChart = (
        
        <Pie
            data = {{
                labels: ["COVID-19(SARS-CoV-2)", "H1N1()", "SARS (SARS-CoV)", "Ebola()", "MERS(MERS-CoV)"],
                datasets: [{
                    data: [deaths.value, 284500, 774, 13562, 858],
                    label: 'Deaths',
                    backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                    fill: true,
                    borderWidh: 1,
                }],
            }}
            options = {{
                title: {
                  display: true,
                  text: 'Predicted death count pie chart'
                }
              }}
            
        /> 
    )
    return (
        <div>
        <div className= {styles.container}>
            {lineChart}
        </div>
        <div>
        {pieChart}
        </div>
        </div>
    )
}

export default Charts;