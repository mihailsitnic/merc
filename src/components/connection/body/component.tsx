import React from "react";
import Head from "components/head";
import Breadcrumbs from "components/breadcrumbs";
import Wrap from "components/wrap";
import Form from "../form";
import {
	Main,
	Wrapper,
} from "./styles";

const Connection: React.FC<any> = () => {
	return (
		<Main>
			<Wrapper>
				<Wrap>
					<Head name="Connection" />
					<Breadcrumbs name="Connection" />
					<Form />
				</Wrap>
			</Wrapper>
		</Main>
	);
};

export default Connection;
