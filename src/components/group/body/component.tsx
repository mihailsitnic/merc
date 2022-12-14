import React from "react";
import Table from "components/group/table";
import {
	Main,
	Wrapper,
	Section,
} from "./styles";

const Reader: React.FC<any> = () => {
	return (
		<Main>
			<Wrapper>
				<Section>
					<Table />
				</Section>
			</Wrapper>
		</Main>
	);
};

export default Reader;
