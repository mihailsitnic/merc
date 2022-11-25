import * as a from "redux/thunk";

function submit(
    values: any,
    actions: any,
    dispatch: any,
    props: any,
) {
    setTimeout(async () => {
        alert(JSON.stringify(values, null, 2));
        // dispatch(a.register(values));
        actions.setSubmitting(false);
    }, 400);
}

export default submit;
