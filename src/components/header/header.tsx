import React from "react";
import Profile from "./profile";
import img from "img";
import {
	Section,
	Wrapper,
	Inner,
	Logo,
	Img,
} from "./styles";

const Header: React.FC<any> = () => {
	return (
		<Section>
			<Wrapper>
				<Inner>
					<Logo to="/">
						<Img src={img.logo} alt="logo" />
					</Logo>
					<Profile />
				</Inner>
			</Wrapper>
		</Section>
	);
};

export default Header;
