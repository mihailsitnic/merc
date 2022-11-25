import React, { lazy, Suspense } from "react";
import { withRouter } from "react-router-dom";
import {
    Main,
    SignInBlock,
    Wrapper,
    Section,
} from "./styles";

const SignUp = lazy(() => import("components/auth/sign-up"));
const SignIn = lazy(() => import("components/auth/sign-in"));
const ForgotPassword = lazy(() => import("components/auth/forgot-password"));
const CheckEmail = lazy(() => import("components/auth/check-email"));
const ResetPassword = lazy(() => import("components/auth/reset-password"));
const ResetPassSuccess = lazy(() => import("components/auth/reset-password-success"));

const Body: React.FC<any> = (props) => {
    const path = props.location.pathname.slice(1);

    return (
        <Main>
            <SignInBlock>
                <Wrapper>
                    <Section>
                        <Suspense fallback={null}>
                            <SignIn {...props} view={path === "sign-in"} />
                            <SignUp {...props} view={path === "sign-up"} />
                            <ForgotPassword {...props} view={path === "forgot-password"} />
                            <CheckEmail {...props} view={path === "check-email"} />
                            <ResetPassword {...props} view={path === "reset-password"} />
                            <ResetPassSuccess {...props} view={path === "reset-password-success"} />
                        </Suspense>
                    </Section>
                </Wrapper>
            </SignInBlock>
        </Main>
    );
};

export default withRouter(Body);
