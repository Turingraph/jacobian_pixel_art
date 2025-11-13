import React, {JSX} from "react";

export default function DIV(
{
	title,
	jsx_array
}:{
	title:string|undefined,
	jsx_array:JSX.Element[]
})
{
	return <div style={{backgroundColor:"#888888"}}>
	{title?<h1>{title}</h1>:<></>}
	<div>
		{jsx_array.map((item, index:number)=>{
			return <div key={index}>{item}</div>
		})}
	</div>
</div>
}