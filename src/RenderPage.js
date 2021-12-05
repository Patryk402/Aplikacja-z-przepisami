import React from "react";

import { Route } from "react-router-dom";

import StartPage from "./mainPages/StartPage";
import Sniadania from "./mainPages/Sniadania";
import SniadaniaMain from "./mainPages/components/SniadaniaMain";

const RenderPage = () => {
	return (
		<>
			<Route path="/" exact component={StartPage} />
			<Route path="/sniadania" exact component={Sniadania} />
			<Route path="/sniadani/:name" exact component={SniadaniaMain} />
		</>
	);
};

export default RenderPage;
