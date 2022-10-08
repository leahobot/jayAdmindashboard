import React from "react";
import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	SplineAreaSeries,
	Inject,
	DateTime,
	Legend,
} from "@syncfusion/ej2-react-charts";
import {
	areaPrimaryXAxis,
	areaPrimaryYAxis,
	areaCustomSeries,
} from "../../data/dummy";
import {Header} from "../../components";
import {useStateContext} from "../../contexts/ContextProvider";

const Area = () => {
	const {currentMode} = useStateContext();
	return (
		<div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
			<Header category='Chart' title='Inflation Rate in Percentage' />

			<ChartComponent
				id='area-chart'
				height='400px'
				chartArea={{border: {width: 0}}}
				primaryXAxis={areaPrimaryXAxis}
				primaryYAxis={areaPrimaryYAxis}
				background={currentMode === "Dark" ? "#33373E" : "#fff"}
				tooltip={{enable: true}}>
				<Inject services={[DateTime, Legend, SplineAreaSeries]} />
				<SeriesCollectionDirective>
					{areaCustomSeries.map((item, index) => (
						<SeriesDirective key={index} {...item} />
					))}
				</SeriesCollectionDirective>
			</ChartComponent>
		</div>
	);
};

export default Area;
