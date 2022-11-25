import React from "react";
import Head from "components/head";
import Breadcrumbs from "components/breadcrumbs";
import Wrap from "components/wrap";
import Form from "../form";
import {
	Main,
	Wrapper,
} from "./styles";

const Edit: React.FC<any> = () => {
	return (
		<Main>
			<Wrapper>
				<Wrap>
					<Head name="Edit meter" />
					<Breadcrumbs name="Edit meter" />
					<Form />
				</Wrap>
			</Wrapper>
		</Main>
	);
};

export default Edit;
