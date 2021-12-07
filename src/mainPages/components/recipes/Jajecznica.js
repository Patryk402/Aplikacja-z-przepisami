import React from "react";

import img from "./pictures/jajecznica.jpg";

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
						10min.
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
							<input type="checkbox" /> Jajka - 4 szt.{" "}
						</li>
						<li>
							<input type="checkbox" />
							Mleko - 100ml.
						</li>
						<li>
							<input type="checkbox" />
							Szczypiorek - 0.5 pęczka.
						</li>
						<li>
							<input type="checkbox" />
							Sól - 1 szczypta.
						</li>
						<li>
							<input type="checkbox" />
							Pieprz - 1 szczypta.
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
						Zaczynamy od umycia i posiekania drobno szczypiorku. Możemy do
						tego użyć noża lub specjalnych nożyczek do ziół. Jajecznica na
						maśle idealnie komponuje się ze świeżym, zielonym
						szczypiorkiem, jednak można go zastąpić dowolną, ulubioną
						zieleniną, np. pietruszką.
					</article>
					<br />
					<article>
						2.
						<br />
						Jajka wbijamy do miski i trzepaczką łączymy z mlekiem. Jajka
						na mleku wlewamy na rozgrzaną patelnię. Smażymy na wolnym
						ogniu, mieszając drewnianą łopatką. Pod koniec smażenia - jak
						białka i żółtka się zetną - doprawiamy solą i pieprzem do
						smaku. Jajecznica z mlekiem najlepiej smakuje ze świeżym
						pieczywem posmarowanym masłem.
					</article>
				</div>
			</div>
		</div>
	);
};

export default Jajecznica;
