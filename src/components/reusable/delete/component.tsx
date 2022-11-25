import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import Modal from "react-modal";
import initialValues from "./init";
import submit from "./submit";
import Body from "./body";
import { modalStyles } from "./styles";

const DeleteModal: React.FC<any> = (props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dispatch = useDispatch();

    return (
        <>
            <span id="delete" onClick={() => setIsOpen(true)} />
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
                        submit(values, actions, dispatch, props);
                    }}
                >
                    {({ setFieldValue, isSubmitting }) => (
                        <Form>
                            <Body
                                setIsOpen={setIsOpen}
                                sfv={setFieldValue}
                                load={isSubmitting}
                            />
                        </Form>
                    )}
                </Formik>
            </Modal>
        </>
    );
};

export default DeleteModal;
