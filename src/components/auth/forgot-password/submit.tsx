import { toast } from "react-toastify";
import { t } from "i18next";
import * as a from "redux/thunk";

function submit(
    values: any,
    actions: any,
    dispatch: any,
    props: any,
) {
    setTimeout(async () => {
        alert(JSON.stringify(values, null, 2));
        // dispatch(a.forgotPassword(values));
        toast(t("Check email"), { type: "success" });
        actions.setSubmitting(false);
    }, 400);
}

export default submit;