import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "redux/hooks";
import { Formik, Form } from "formik";
import i18n from "translations";
import { lang } from "redux/reducer";
import initialValues from "./init";
import submit from "./submit";
import Body from "./body";
import {
    Section,
    Flag,
    Lang,
    LangWrap,
} from "./styles";

const EditLang: React.FC<any> = (props) => {

    const currentLang = useAppSelector((state) => state.lang);
    const dispatch = useDispatch();

    const formatOptionLabel = ({ label, icon }: any) => (
        <LangWrap>
            <Flag>{icon}</Flag>
            <Lang>{label}</Lang>
        </LangWrap>
    );

    const changeLang = (lng: any) => {
        i18n.changeLanguage(lng.value);
        dispatch(lang(lng.value));
    };

    return (
        <Section>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) =>
                    submit(values, actions, dispatch, props)
                }
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Body
                            formatOptionLabel={formatOptionLabel}
                            changeLang={changeLang}
                            currentLang={currentLang}
                            loader={isSubmitting}
                        />
                    </Form>
                )}
            </Formik>
        </Section>
    );
};

export default EditLang;
