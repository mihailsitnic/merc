import React from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { Formik } from "formik";
import Body from "./body";
import initialValues from "./init";
import submit from "./submit";

const Form: React.FC<any> = (props) => {
    const dispatch = useDispatch();

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={(values, actions) =>
                submit(values, actions, dispatch, props)
            }>
                {({ setFieldValue, isSubmitting }) => (
                    <Body sfv={setFieldValue} isSubmitting={isSubmitting} />
                )}
            </Formik>
        </>
    );
};

export default withRouter(Form);
