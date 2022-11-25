import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { useAppSelector } from "redux/hooks";
import { Formik } from "formik";
import init from "./init";
import submit from "./submit";
import FormBody from "./form-body";
import validate from "./validate";
import { Forma } from "./styles";

const Component: React.FC<any> = (props) => {
    const dispatch = useDispatch();
    const { id }: any = useParams();
    const data = useAppSelector((state) => state.mockData);

    return (
        <Formik
            enableReinitialize
            initialValues={init(data)}
            validate={(values: any) => validate(values)}
            onSubmit={(values, actions) =>
                submit(values, actions, dispatch, props, id)
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

export default withRouter(Component);
