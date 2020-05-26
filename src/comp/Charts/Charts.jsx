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
            options = {{yAxes: [{
                type: 'logarithmic',
                ticks: {
                    beginAtZero: true,
                    min: 0,
                    callback: function(tick, index, ticks){
                      return tick.toLocaleString();
                    },
                     
                },
                aafterBuildTicks: function(chart){
                    var maxTicks = 20;
                    var maxLog = Math.log(chart.ticks[0]);
                    var minLogDensity = maxLog / maxTicks;
                
                    var ticks = [0, 1000, 10000, 100000, 1000000, 10000000];
                    var currLog = -Infinity;
                    lineChart.each(chart.ticks.reverse(), function(tick){
                      var log = Math.max(0, Math.log(tick));
                      if (log - currLog > minLogDensity){
                        ticks.push(tick);
                        currLog = log;
                      }
                    });
                    chart.ticks = ticks;
                  }
            }]}}
            
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