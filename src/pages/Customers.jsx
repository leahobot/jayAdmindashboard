import React from "react";
import {
	GridComponent,
	Page,
	ColumnsDirective,
	ColumnDirective,
	Selection,
	Edit,
	Sort,
	Filter,
	Toolbar,
	Inject,
} from "@syncfusion/ej2-react-grids";
import {customersData, customersGrid} from "../data/dummy";
import {Header} from "../components";

const Customers = () => {
	return (
		<div className='m-2 mt-12 md:m-10 md:p-10 p-2 bg-white rounded-3xl'>
			<Header category='Page' title='Customers' />
			<GridComponent
				dataSource={customersData}
				allowPaging
				allowSorting
				toolbar={["Delete"]}
				editSettings={{allowDeleting: true, allowEditing: true}}
				width='auto'>
				<ColumnsDirective>
					{customersGrid.map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
				</ColumnsDirective>
				<Inject services={[Selection, Sort, Toolbar, Filter, Page, Edit]} />
			</GridComponent>
		</div>
	);
};

export default Customers;
