import React, { useState } from "react";
import { t } from "i18next";
import Select from "./select";
import img from "img";
import {
    SearchForm,
    Input,
    Button,
    Img,
    Spinner,
} from "../styles";

const Body: React.FC<any> = (props) => {
    const { sfv, isSubmitting } = props;

    const [target, setTarget] = useState<string>("");
    const [id, setId] = useState<number>(0);

    const handleSearch = (e: any) => {
        sfv("search", e.target.value);
        setTarget(e.target.value);
    };

    return (
        <SearchForm autoComplete="off">
            <Input
                name="search"
                placeholder={id ? t("Search") : t("Number")}
                onChange={(e: any) => handleSearch(e)}
                value={target}
                type={id ? "text" : "number"}
            />
            <Select sfv={sfv} id={(e: number) => setId(e)} />
            <Button type="submit" id="search-submit">
                {isSubmitting ? <Spinner /> : <Img src={img.iconSearch} />}
            </Button>
        </SearchForm>
    );
};

export default Body;
