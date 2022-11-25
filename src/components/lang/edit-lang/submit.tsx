import { toast } from "react-toastify";
import { t } from "i18next";

function submit(values: any, actions: any, dispatch: any, props: any) {
    setTimeout(async () => {
        toast(t("Language changed successfully"), { type: "success" });

        // toast(t("Please, try one more time"), { type: "error" });

        actions.setSubmitting(false);
    }, 400);
}

export default submit;
