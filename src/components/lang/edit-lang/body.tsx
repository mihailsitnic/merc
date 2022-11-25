import React from "react";
import { t } from "i18next";
import Button from "components/reusable/button";
import initialValues from "./init";
import {
    Name,
    Row,
    Col6,
    Wrap,
    Inner,
    Label,
    SelectStatus,
    Footer,
    customStyles,
} from "./styles";

const Body: React.FC<any> = (props) => {
    const { formatOptionLabel, changeLang, currentLang, loader } = props;

    return (
        <>
            <Inner>
                <Name>{t("Language")}</Name>
                <Row>
                    <Col6 {...props} $left>
                        <Wrap>
                            <Label>{t("Choose language")}</Label>
                            <SelectStatus
                                styles={customStyles}
                                formatOptionLabel={formatOptionLabel}
                                onChange={(lang: any) => changeLang(lang)}
                                options={initialValues}
                                placeholder={false}
                                defaultValue={initialValues.filter(
                                    (x) => x.value.indexOf(currentLang) > -1
                                )}
                                components={{
                                    DropdownIndicator: () => null,
                                    IndicatorSeparator: () => null,
                                }}
                            />
                        </Wrap>
                    </Col6>
                    <Col6 {...props} $right />
                </Row>
            </Inner>
            <Footer>
                <Button auto color="blue" type="submit" active={loader}>
                    {t("Save language")}
                </Button>
            </Footer>
        </>
    );
};

export default Body;
