import React from "react";

import "./SniadaniaMain.scss";

import Jajecznica from "./recipes/Jajecznica";
import Owsianka from "./recipes/Owsianka";

const SniadaniaMain = (props) => {
	console.log(props);
	return (
		<div>
			{props.match.params.name === "jajecznica" && <Jajecznica />}
			{props.match.params.name === "owsianka" && <Owsianka />}
		</div>
	);
};

export default SniadaniaMain;
