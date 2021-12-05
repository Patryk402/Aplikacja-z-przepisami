import React from "react";
import { Link } from "react-router-dom";

import "../styleFolder/Sniadania.scss";

import meal1 from "./components/recipes/pictures/jajecznica.jpg";
import meal2 from "./components/recipes/pictures/owsianka.jpg";
import meal3 from "./components/recipes/pictures/racuchy.jpg";

const breakfastsNames = ["jajecznica", "owsianka", "racuchy"];
const images = [meal1, meal2, meal3];
const Sniadania = () => {
	const content = breakfastsNames.map((breakfast, index) => {
		let image = images[index];
		return (
			<div className="containers">
				<Link to={`/sniadani/${breakfast}`}>{breakfast}</Link>
				<div className="title"></div>
				<img src={image} alt={image} />
			</div>
		);
	});

	return <div className="mainContainer">{content}</div>;
};

export default Sniadania;
