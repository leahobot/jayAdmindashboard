import React from "react";
import {
	GridComponent,
	Page,
	ColumnsDirective,
	ColumnDirective,
	Resize,
	Sort,
	ContextMenu,
	Filter,
	ExcelExport,
	PdfExport,
	Edit,
	Inject,
} from "@syncfusion/ej2-react-grids";

import {ordersData, contextMenuItems, ordersGrid} from "../data/dummy";
import {Header} from "../components";

const Orders = () => {
	const editing = {allowDeleting: true, allowEditing: true};

	return (
		<div className='m-2 mt-12 md:m-10 md:p-10 p-2 bg-white rounded-3xl'>
			<Header category='Page' title='Orders' />
			<GridComponent
				id='gridcomp'
				dataSource={ordersData}
				allowPaging
				allowSorting
				allowExcelExport
				allowPdfExport
				contextMenuItems={contextMenuItems}
				editSettings={editing}>
				<ColumnsDirective>
					{ordersGrid.map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
				</ColumnsDirective>
				<Inject
					services={[
						Resize,
						Sort,
						ContextMenu,
						Filter,
						Page,
						ExcelExport,
						Edit,
						PdfExport,
					]}
				/>
			</GridComponent>
		</div>
	);
};

export default Orders;
