import * as a from "redux/thunk";

function submit(
    values: any,
    actions: any,
    dispatch: any,
    props: any,
    id: any,
    // data: any
) {
    setTimeout(async () => {
        // alert(JSON.stringify(values, null, 2));

        dispatch(a.testeEdit(values));

        props.history.push(`/details/${id}`);
        actions.setSubmitting(false);
    }, 400);
}

export default submit;
