import { Line } from "react-chartjs-2";
import React from "react";

class sample extends React.Component {
	render() {
		return (
			<Line
				data={{
					labels: [
						"01/01/2019",
						"01/02/2019",
						"01/03/2019",
						"01/04/2019",
						"01/05/2019",
						"01/06/2019"
					],
					datasets: [
						{
							label: "Upload Speed",
							data: [12, 19, 3, 5, 2, 3],
							backgroundColor: ["rgba(90, 99, 132, 0.2)"],
							borderColor: ["rgba(90, 99, 132, 0.2)"],
							borderWidth: 1
						},
						{
							label: "Download Speed",
							data: [1, 39, 13, 25, 20, 3],
							backgroundColor: ["rgba(255, 99, 132, 0.2)"],
							borderColor: ["rgba(255, 99, 132, 1)"],
							borderWidth: 1
						},
						{
							label: "Minimum Speed Threshhold",
							data: [12, 12, 12, 12, 12, 12],
							backgroundColor: ["rgba(0, 0, 0, 0)"],
							borderColor: ["rgba(0, 0, 0, 1)"],
							borderWidth: 1
						}
					]
				}}
				width={500}
				height={500}
				options={{ maintainAspectRatio: false }}
			/>
		);
	}
}

export default sample;
