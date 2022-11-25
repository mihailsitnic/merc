import React from "react";
import Head from "components/head";
import Breadcrumbs from "components/breadcrumbs";
import Wrap from "components/wrap";
import Form from "../form";
import List from "components/list";
import {
	Main,
	Wrapper,
} from "./styles";

const Search: React.FC<any> = () => {
	return (
		<Main>
			<Wrapper>
				<Wrap>
					<Head name="Search" />
					<Breadcrumbs name="Search" />
					<Form />
					<List />
				</Wrap>
			</Wrapper>
		</Main>
	);
};

export default Search;
