import React from "react";
import STR from "../str/str";
import * as a from "../type/alias";

export function B_STR({
	title,
	func
}:{
	title:string,
	func:a.t_func
})
{
	return <button onClick={func}><STR text={title}/></button>
}

/*
List of Button
1.	Open file
2.	Save file
3.	Create New Project
4.	Import Image
5.	Get Image as PNG/JPG
*/
