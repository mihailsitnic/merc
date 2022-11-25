import React from "react";
import Head from "components/head";
import Breadcrumbs from "components/breadcrumbs";
import Wrap from "components/wrap";
import Form from "../form";
import {
	Main,
	Wrapper,
} from "./styles";

const Station: React.FC<any> = () => {
	return (
		<Main>
			<Wrapper>
				<Wrap>
					<Head name="Add Station" />
					<Breadcrumbs name="Add Station" />
					<Form />
				</Wrap>
			</Wrapper>
		</Main>
	);
};

export default Station;
