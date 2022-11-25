import React from "react";
import Head from "components/head";
import Breadcrumbs from "components/breadcrumbs";
import View from "../view";
import Wrap from "components/wrap";
import {
	Main,
	Wrapper,
} from "./styles";

const Details: React.FC<any> = () => {
	return (
		<Main>
			<Wrapper>
				<Wrap>
					<Head name="Details" />
					<Breadcrumbs name="Details" />
					<View />
				</Wrap>
			</Wrapper>
		</Main>
	);
};

export default Details;
