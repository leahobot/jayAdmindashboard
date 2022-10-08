import React from "react";
import {
	HtmlEditor,
	Toolbar,
	Image,
	Inject,
	Link,
	QuickToolbar,
	RichTextEditorComponent,
} from "@syncfusion/ej2-react-richtexteditor";
import {EditorData} from "../data/dummy";
import {Header} from "../components";

const Editor = () => {
	return (
		<div className='m-2 mt-12 md:m-10 md:p-10 mt-24 p-2 bg-white rounded-3xl'>
			<Header category='App' title='Editor' />
			<RichTextEditorComponent>
				<EditorData />
				<Inject services={[HtmlEditor, Toolbar, QuickToolbar, Link, Image]} />
			</RichTextEditorComponent>
		</div>
	);
};

export default Editor;
