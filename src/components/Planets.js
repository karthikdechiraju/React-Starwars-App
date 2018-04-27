import React from 'react';
import { Bubble } from 'react-chartjs-2';

const Planet = (props) => {

	const { data } = props;

	return(
		<Bubble
			data={{
		        datasets: [{
		            data: data,
			        backgroundColor: "#673AB7"
		        }],
			}}
			width={600}
			height={350}
			options={{
				responsive: true,
				title:{
					display:false
				},
				legend: {
					display: false,
					responsive: false
				},
				tooltips: {
					mode:'nearest',
					callbacks: {
						label: function(tooltipItem, data) {
							return (data.datasets[0].data[tooltipItem.index].name.toUpperCase());
						}
					}
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: false,
						ticks: {
		                    beginAtZero: true,
		                    stepSize: 100000,
		                    min: 0,
		                    max: 100
		                }
					}],
					yAxes: [{
						display: false,
						ticks: {
		                    beginAtZero: true,
		                    stepSize: 100000,
		                    min: 0,
		                    max: 100
		                }
					}]
				}
			}}
		/>			
	)
}



export default Planet;