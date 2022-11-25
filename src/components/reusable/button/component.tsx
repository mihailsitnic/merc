import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Spinner } from "./styles";

const Component: React.FC<any> = (props) => {
    const { color, type, children, active, disabled, ml, auto } = props;

    return (
        <Button
            {...props}
            ml={ml}
            auto={auto}
            color={color}
            type={type}
            active={active}
            disabled={disabled}
        >
            {children}
            <Spinner className="loader" />
        </Button>
    );
};

export default withRouter(Component);
