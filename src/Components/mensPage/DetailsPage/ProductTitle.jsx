import React from "react";
const ProductTitle  = (props) => {
	return (
		<>
		<div className="container">
			<h4 style={{"text-transform": "capitalize" }}>{props.title}</h4>
		</div>
	</>
	)
}
export default ProductTitle;
