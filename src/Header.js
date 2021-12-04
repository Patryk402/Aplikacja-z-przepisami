import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import logo from "./img/logo.png";
import hamburger from "./img/hamburger.png";
import close from "./img/close.png";

const Header = () => {
	const [menu, setMenu] = useState(false);

	let showMenu = {
		transform: "translateX(0)",
	};
	let closeMenu = {
		transform: "translateX(100%)",
	};

	const handleMenu = () => setMenu((prev) => !prev);

	return (
		<>
			<div className="shadow-sm p-3 mb-5 bg-body rounded">
				<NavLink to="/">
					<img src={logo} className="img-fluid" alt="logo" />
				</NavLink>
				<ul>
					<li>
						<NavLink to="/sniadania">ŚNIADANIA</NavLink>
					</li>
					<li>
						<NavLink to="/obiady">OBIADY</NavLink>
					</li>
					<li>
						<NavLink to="/kolacje">KOLACJE</NavLink>
					</li>
				</ul>
			</div>
			<div onClick={handleMenu} className="ButtonMenu">
				{menu ? (
					<img src={close} alt={close} />
				) : (
					<img src={hamburger} alt={hamburger} />
				)}
			</div>
			<div style={menu ? showMenu : closeMenu} className="ResponseMenu">
				<ul>
					<li>
						<NavLink to="/sniadania">
							<button onClick={handleMenu}>ŚNIADANIA</button>{" "}
						</NavLink>
					</li>
					<li>
						<NavLink to="/obiady">OBIADY</NavLink>
					</li>
					<li>
						<NavLink to="/kolacje">KOLACJE</NavLink>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Header;
