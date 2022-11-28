import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import Modal from "react-modal";
import initialValues from "./init";
import img from "img";
import submit from "./submit";
import FormBody from "./body";
import {
    modalStyles,
    ActionEdit,
} from "./styles";

const EditModal: React.FC<any> = (props) => {
    const { row } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dispatch = useDispatch();

    return (
        <>
            <ActionEdit
                src={img.iconEdit}
                alt="icon"
                onClick={() => setIsOpen(true)}
            />
            <Modal
                {...props}
                onRequestClose={() => setIsOpen(false)}
                style={modalStyles}
                ariaHideApp={false}
                isOpen={isOpen}
            >
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions) => {
                        submit(values, actions, dispatch, props);
                    }}
                >
                    {({ values, setFieldValue, isSubmitting }) => (
                        <Form>
                            <FormBody
                                sfv={setFieldValue}
                                setIsOpen={setIsOpen}
                                row={row}
                                load={isSubmitting}
                                values={values}
                            />
                        </Form>
                    )}
                </Formik>
            </Modal>
        </>
    );
};

export default EditModal;
