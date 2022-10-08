import React from "react";
import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	LineSeries,
	Inject,
	DateTime,
	Legend,
	Tooltip,
} from "@syncfusion/ej2-react-charts";
import {
	LinePrimaryXAxis,
	LinePrimaryYAxis,
	lineCustomSeries,
} from "../../data/dummy";
import {useStateContext} from "../../contexts/ContextProvider";

const LineChart = () => {
	const {currentMode} = useStateContext();
	return (
		<ChartComponent
			id='line-chart'
			height='400px'
			primaryXAxis={LinePrimaryXAxis}
			primaryYAxis={LinePrimaryYAxis}
			chartArea={{border: {width: 0}}}
			background={currentMode === "Dark" ? "#33373E" : "#fff"}
			tooltip={{enable: true}}>
			<Inject services={[DateTime, Legend, Tooltip, LineSeries]} />
			<SeriesCollectionDirective>
				{lineCustomSeries.map((item, index) => (
					<SeriesDirective key={index} {...item} />
				))}
			</SeriesCollectionDirective>
		</ChartComponent>
	);
};

export default LineChart;
