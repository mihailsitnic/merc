import React from "react";
import { Formik } from "formik";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import validate from "./validate";
import initialValues from "./init";
import ItemHero from "./items/hero";
import ItemEmail from "./items/email";
import ItemPass from "./items/pass";
import ItemCheck from "./items/check";
import ItemSubmit from "./items/submit";
import ItemFooter from "./items/footer";
import submit from "./submit";
import img from "img";
import { Header, Body, Logo, Forma } from "./styles";

const SignIn: React.FC<any> = (props) => {
	const { view } = props;
	const dispatch = useDispatch();

	const renderForm = () => (
		<Formik
			initialValues={initialValues}
			validate={(values) => validate(values)}
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
						<ItemPass {...props} errors={errors} touched={touched} />
						<ItemCheck />
						<ItemSubmit {...props} submitting={isSubmitting} loader={isSubmitting} />
					</Body>
					<ItemFooter />
				</Forma>
			)}
		</Formik>
	);

	return view ? renderForm() : null;
};

export default withRouter(SignIn);
