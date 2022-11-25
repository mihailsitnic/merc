import React from "react";
import { withRouter } from "react-router-dom";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import validate from "./validate";
import img from "img";
import Hero from "./items/hero";
import Email from "./items/email";
import Submit from "./items/submit";
import ItemFooter from "./items/footer";
import submit from "./submit";
import {
    Header,
    Body,
    Logo,
    Forma,
} from "./styles";

const ForgotPassword: React.FC<any> = (props) => {
    const { view } = props;
    const dispatch = useDispatch();

    const renderForm = () => (
        <Formik
            initialValues={{ email: "" }}
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
                        <Email {...props} errors={errors} touched={touched} />
                        <Submit {...props} submitting={isSubmitting} loader={isSubmitting} />
                    </Body>
                    <ItemFooter />
                </Forma>
            )}
        </Formik>
    );

    return view ? renderForm() : null;
};

export default withRouter(ForgotPassword);
