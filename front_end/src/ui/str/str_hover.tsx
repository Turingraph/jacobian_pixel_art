import React from "react";
import * as a from "../type/alias"

export function STR_HOVER(
{
	str_hover,
	is_hover
}:{
	str_hover:a.t_str_hover,
	is_hover:boolean
}
)
{
	if (is_hover === true)
		return <></>
	return <div>
	<h1 
		id="str_hover"
		style={{fontSize:"15px"}}
	>{str_hover}</h1>
	</div>
}