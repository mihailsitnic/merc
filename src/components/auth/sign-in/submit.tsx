import * as a from "redux/thunk";

function submit(
    values: any,
    actions: any,
    dispatch: any,
    props: any,
) {
    setTimeout(async () => {
        const res = await dispatch(a.login(values));

        if (a.login.fulfilled.match(res)) {
            props.history.push("/");
        } else if (a.login.rejected.match(res)) {
            console.log("Login error");
        }

        actions.setSubmitting(false);
    }, 400);
}

export default submit;