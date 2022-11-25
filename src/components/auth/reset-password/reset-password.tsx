import React from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import validate from "./validate";
import initialValues from "./init";
import img from "img";
import Hero from "./items/hero";
import Pass from "./items/pass";
import Confirm from "./items/confirm";
import Submit from "./items/submit";
import Footer from "./items/footer";
import submit from "./submit";
import {
    Header,
    Body,
    Logo,
    Forma,
} from "./styles";

const ResetPassword: React.FC<any> = (props) => {
    const { view } = props;
    const dispatch = useDispatch();


    const renderForm = () => (
        <Formik
            initialValues={initialValues}
            validate={(values) => validate(values)}
            onSubmit={(values, actions) => submit(values, actions, dispatch, props)}
        >
            {({ isSubmitting, errors, touched }) => (
                <Forma>
                    <Header>
                        <Link to="/sign-in">
                            <Logo src={img.logo} />
                        </Link>
                    </Header>
                    <Body>
                        <Hero />
                        <Pass {...props} errors={errors} touched={touched} />
                        <Confirm {...props} errors={errors} touched={touched} />
                        <Submit {...props} submitting={isSubmitting} loader={isSubmitting} />
                    </Body>
                    <Footer />
                </Forma>
            )}
        </Formik>
    );

    return view ? renderForm() : null;
};

export default withRouter(ResetPassword);
