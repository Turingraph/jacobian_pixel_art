import React, {JSX} from "react";
import * as a from "../type/alias";
import { STR_HEADER } from "../str/str_header";
import "./div.css"

/*
How to center child div inside parent div ?
*	https://youtu.be/4Dl6TTs-nos?si=FLJeJqd_OxjQCVEZ
*/

export type t_div = {
	title?:string|undefined,
	jsx_array:JSX.Element[],
	class_name?:a.t_class_name,
	display?:a.t_css,
	grid_t_col ?:a.t_css ,
	grid_t_row ?:a.t_css ,
	grid_gap ?:a.t_css ,
	margin?:a.t_css,
}

export default function DIV(
{
	title = undefined as undefined|string,
	jsx_array,
	class_name = "no_class" as a.t_class_name,
	display = "" as a.t_css,
	grid_t_col = "" as a.t_css ,
	grid_t_row = "" as a.t_css ,
	grid_gap = "" as a.t_css,
	margin = "0 auto" as a.t_css,
	height = "" as a.t_css,
	min_height = "" as a.t_css,
	flex = "" as a.t_css,
	background_color = "" as a.t_css,
	position = "static" as "static"|"absolute"|"fixed"|"relative"|"sticky"|"initial"|"inherit",
	flex_direction = undefined as undefined|"row"|"column"
}:{
	title?:string|undefined,
	jsx_array:JSX.Element[],
	class_name?:a.t_class_name,
	display?:a.t_css,
	grid_t_col ?:a.t_css ,
	grid_t_row ?:a.t_css ,
	grid_gap ?:a.t_css ,
	margin?:a.t_css,
	height?:a.t_css,
	min_height?:a.t_css,
	flex?:a.t_css,
	background_color?:a.t_css,
	flex_direction?:undefined|"row"|"column",
	position?:"static"|"absolute"|"fixed"|"relative"|"sticky"|"initial"|"inherit"
})
{
	return <div 
	className={class_name + " class_div"} 
	style={{
		margin:margin,
	}}>
	{title?<STR_HEADER title={title}/>:<></>}
	<div
		style={{
			display:display, 
			gridTemplateColumns:grid_t_col, 
			gridTemplateRows:grid_t_row,
			gap:grid_gap,
			position:position,
			height:height,
			minHeight:min_height,
			flexDirection:flex_direction,
			backgroundColor:background_color,
			flex:flex
		}}>
		{jsx_array.map((item, index:number)=>{
			return <div key={index}>{item}</div>
		})}
	</div>
</div>
}