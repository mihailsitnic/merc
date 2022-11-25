import { useEffect } from "react";

const Close: React.FC<any> = (props) => {
    const { open } = props;

    useEffect(() => {
        window.addEventListener("click", closePopUpOnClickOutside);
        return () => window.removeEventListener("click", closePopUpOnClickOutside);
    });

    const closePopUpOnClickOutside = (e: any) => {
        const target = e.target;
        const popUp = target.closest(".pop-up");
        const iconMore = target.closest(".icon-more");
        const stateModal = target.closest("#state-modal");

        if (!popUp && !iconMore && !stateModal) {
            open(false);
        }
        return null;
    };

    return <div />;
};

export default Close;
