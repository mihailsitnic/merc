import React from "react";
import Form from "./form";
import { t } from "i18next";
import { Section, Wrapper, Inner, Title, Subtitle } from "./styles";

const Hero: React.FC<any> = (props) => {
	const isWebp = document.body.classList.contains("webp");

	return (
		<Section {...props} isWebp={isWebp}>
			<Wrapper>
				<Inner>
					<Title>{t("Moldelectrica search")}</Title>
					<Subtitle>{t("Find Meters by Station Name or Meter ID")}</Subtitle>
					<Form />
				</Inner>
			</Wrapper>
		</Section>
	);
};

export default Hero;
