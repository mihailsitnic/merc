import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import { t } from "i18next";
import Modal from "react-modal";
import initialValues from "./init";
import submit from "./submit";
import Body from "./body";
import {
    modalStyles,
    Li,
} from "./styles";

const DeleteModal: React.FC<any> = (props) => {
    const { row } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dispatch = useDispatch();

    return (
        <>
            <Li onClick={() => setIsOpen(true)}>{t("Delete")}</Li>
            <Modal
                {...props}
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                style={modalStyles}
                ariaHideApp={false}
            >
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions) => {
                        values.user = row.id;
                        submit(values, actions, dispatch, props);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Body row={row} setIsOpen={setIsOpen} load={isSubmitting} />
                        </Form>
                    )}

                </Formik>
            </Modal>
        </>
    );
};

export default DeleteModal;
