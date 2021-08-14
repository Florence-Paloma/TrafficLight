import PropTypes from "prop-types";
import React from "react";

const Circle = props => {
	return (
		<div
			className={
				props.state == true ? "grey ".concat(props.colorSon) : "grey "
			}
			onClick={() => props.changeProp(props.colorSon)}>
			<img src={props.face} className="img-fluid"></img>
		</div>
	);
};

Circle.propTypes = {
	colorSon: PropTypes.string,
	changeProp: PropTypes.func,
	state: PropTypes.bool,
	face: PropTypes.string
};

export default Circle;
