import { useEffect } from "react";

const Close: React.FC<any> = (props) => {
    const { setID } = props;

    useEffect(() => {
        window.addEventListener("click", closePopUpOnClickOutside);
        return () => window.removeEventListener("click", closePopUpOnClickOutside);
    });

    const closePopUpOnClickOutside = (e: any) => {
        const target = e.target;
        const popUp = target.closest(".pop-up");
        const iconMore = target.closest(".icon-more");

        if (!popUp && !iconMore) {
            setID(0);
        }
        return null;
    };

    return <div />;
};

export default Close;
