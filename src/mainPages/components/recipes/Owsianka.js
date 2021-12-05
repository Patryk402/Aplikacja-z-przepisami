import React from "react";

import img from "./pictures/owsianka.jpg";

import clock from "../icons/clock.png";
import person from "../icons/person.png";
import star1 from "../icons/star1.png";

const Jajecznica = () => {
	return (
		<div className="main-content">
			<div className="image">
				<img src={img} alt={img} />
			</div>
			<div className="content">
				<div className="content1">
					<label>
						<img src={clock} alt={clock} />
						25min.
					</label>
					<label>
						<img src={person} alt={person} />
					</label>
					<label>
						<img style={{ height: 100 }} src={star1} alt={star1} />
					</label>

					<ul>
						<h3>TEGO POTRZEBUJESZ:</h3>
						<li>
							<input type="checkbox" />
							Banany - 2 szt.
						</li>
						<li>
							<input type="checkbox" />
							Płatki owsiane - 5 łyżek.
						</li>
						<li>
							<input type="checkbox" />
							Mleko - 200 ml.
						</li>
					</ul>
				</div>
				<div className="content2">
					<div className="title">
						<h2>Przepis</h2>
					</div>
					<article>
						1.
						<br />
						Mleko zagotowujemy z cukrem waniliowym.
					</article>
					<article>
						2.
						<br />
						Dodajemy płatki, mieszamy i ściągamy z ognia zostawiamy na 10
						minut.
					</article>
					<article>
						3.
						<br />
						Banana obieramy, kroimy w kostkę, dodajemy do owsianki.
					</article>
					<article>
						4.
						<br />
						Całość mieszamy i podajemy tuż po przygotowaniu.
					</article>
				</div>
			</div>
		</div>
	);
};

export default Jajecznica;
