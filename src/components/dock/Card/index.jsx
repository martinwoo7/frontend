import React from "react";
import "./styles.css";

export const Card = ({ src }) => {
	const preventDragHandler = (e) => {
		e.preventDefault();
	};
	return (
		<span className="cards" onDragStart={preventDragHandler}>
			<img src={src} alt="" className="card-blur" />
			<img src={src} alt="" className="card-img" />
		</span>
	);
};
