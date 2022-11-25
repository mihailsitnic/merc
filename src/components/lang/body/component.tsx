import React from "react";
import { useAppSelector } from "redux/hooks";
import Head from "components/head";
import Breadcrumbs from "components/breadcrumbs";
import EditLang from "components/lang/edit-lang";
import {
	Main,
	Wrapper,
} from "./styles";

const Lang: React.FC<any> = () => {
	useAppSelector((state) => state.lang);

	return (
		<Main>
			<Wrapper>
				<Head name="Language selection" />
				<Breadcrumbs name="Language selection" />
				<EditLang />
			</Wrapper>
		</Main>
	);
};

export default Lang;
