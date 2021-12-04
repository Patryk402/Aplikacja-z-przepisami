import React from "react";

import "../styleFolder/StartPage.scss";

import vege from "../img/vege.png";
import vege2 from "../img/tomatos.png";
const StartPage = () => {
	return (
		<div className="main">
			<div className="container1">
				<h2>NIE MASZ POMYSLU NA DANIE?</h2>
				<article>
					<em>
						Żaden problem!, na tej stronie znajdziesz wiele przepisów
						które zaspokoją Twój głód jak i Twojej rodziny
					</em>
				</article>
				<img src={vege2} className="img-fluid" alt="vege2" />
			</div>
			<div className="container2">
				<img src={vege} className="img-fluid" alt="vege" />
			</div>
		</div>
	);
};

export default StartPage;
