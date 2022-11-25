import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useAppSelector } from "redux/hooks";

function Controllers(props: any) {
    const { history } = props;
    const token = useAppSelector((state: any) => state.token);

    useEffect(() => {
        if (!token) {
            history.push("/sign-in");
        }
    }, []);

    return null;
}

export default withRouter(Controllers);
