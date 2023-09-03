import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
// Dock
import { Dock } from "./dock/Dock";
import { DockCard } from "./dock/DockCard";
import { DockDivider } from "./dock/DockDivider";
import { Card } from "./dock/Card";

const GRADIENTS = [
	"https://products.ls.graphics/mesh-gradients/images/03.-Snowy-Mint_1-p-130x130q80.jpeg",
	"https://products.ls.graphics/mesh-gradients/images/04.-Hopbush_1-p-130x130q80.jpeg",
	"https://products.ls.graphics/mesh-gradients/images/06.-Wisteria-p-130x130q80.jpeg",
	"https://products.ls.graphics/mesh-gradients/images/09.-Light-Sky-Blue-p-130x130q80.jpeg",
	"https://products.ls.graphics/mesh-gradients/images/12.-Tumbleweed-p-130x130q80.jpeg",
	"https://products.ls.graphics/mesh-gradients/images/15.-Perfume_1-p-130x130q80.jpeg",
	null,
	"https://products.ls.graphics/mesh-gradients/images/36.-Pale-Chestnut-p-130x130q80.jpeg",
];
const Layout = () => {
	const [active, setActive] = useState(0);
	return (
		<div>
			<Outlet />
			<div style={{ backgroundColor: "#171717" }}>
				<Dock active={active} setActive={setActive}>
					{GRADIENTS.map((src, index) =>
						src ? (
							<NavLink to={`/home`} key={index}>
								{({ isActive, isPending }) => (
									<DockCard key={src} value={index} isActive={isActive}>
										<Card src={src} />
									</DockCard>
								)}
							</NavLink>
						) : (
							<DockDivider key={index} />
						)
					)}
				</Dock>
			</div>
		</div>
	);
};
export default Layout;
