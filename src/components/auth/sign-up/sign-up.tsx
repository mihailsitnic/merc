import React from "react";
import { Formik } from "formik";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import initialValues from "./init";
import validate from "./validate";
import ItemHero from "./items/hero";
import ItemFooter from "./items/footer";
import ItemPass from "./items/pass";
import ItemEmail from "./items/email";
import ItemName from "./items/name";
import ItemSubmit from "./items/submit";
import submit from "./submit";
import img from "img";
import { Header, Body, Logo, Forma } from "./styles";

const SignUp: React.FC<any> = (props) => {
    const { view } = props;
    const dispatch = useDispatch();

    const renderForm = () => (
        <Formik
            initialValues={initialValues}
            validate={(values: any) => validate(values)}
            onSubmit={(values, actions) => submit(values, actions, dispatch, props)}
        >
            {({ errors, touched, isSubmitting }) => (
                <Forma>
                    <Header>
                        <Link to="/sign-in">
                            <Logo src={img.logo} />
                        </Link>
                    </Header>
                    <Body>
                        <ItemHero />
                        <ItemEmail {...props} errors={errors} touched={touched} />
                        <ItemName {...props} errors={errors} touched={touched} />
                        <ItemPass {...props} errors={errors} touched={touched} />
                        <ItemSubmit {...props} submitting={isSubmitting} loader={isSubmitting} />
                    </Body>
                    <ItemFooter />
                </Forma>
            )}
        </Formik>
    );

    return view ? renderForm() : null;
};

export default withRouter(SignUp);
