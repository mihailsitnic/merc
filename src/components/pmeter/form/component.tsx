import React from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import initialValues from "./init";
import submit from "./submit";
import FormBody from "./form-body";
import validate from "./validate";
import { Forma } from "./styles";

const RoomsWanted: React.FC<any> = (props) => {
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={initialValues}
            validate={(values: any) => validate(values)}
            onSubmit={(values, actions) =>
                submit(values, actions, dispatch, props)
            }
        >
            {({
                isSubmitting,
                errors,
                touched,
                values,
            }) => (
                <Forma autoComplete="off">
                    <FormBody
                        values={values}
                        isSubmitting={isSubmitting}
                        errors={errors}
                        touched={touched}
                    />
                </Forma>
            )}
        </Formik>
    );
};

export default RoomsWanted;
