import React from "react";
import Logo from "./logo";
import Profile from "./profile";
import {
	Section,
	Wrapper,
	Inner,
} from "./styles";

const Header: React.FC<any> = () => {
	return (
		<Section>
			<Wrapper>
				<Inner>
					<Logo />
					<Profile />
				</Inner>
			</Wrapper>
		</Section>
	);
};

export default Header;
