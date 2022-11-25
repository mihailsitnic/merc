import React from "react";
import Head from "components/head";
import Breadcrumbs from "components/breadcrumbs";
import Wrap from "components/wrap";
import Form from "../form";
import {
	Main,
	Wrapper,
} from "./styles";

const PhysicalMeters: React.FC<any> = () => {

	return (
		<Main>
			<Wrapper>
				<Wrap>
					<Head name="Physical Meter" />
					<Breadcrumbs name="Physical Meter" />
					<Form />
				</Wrap>
			</Wrapper>
		</Main>
	);
};

export default PhysicalMeters;
