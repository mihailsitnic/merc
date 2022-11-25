import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import Modal from "react-modal";
import initialValues from "./init";
import img from "img";
import submit from "./submit";
import Close from "./close";
import DeleteModal from "./delete";
import FormBody from "./body";
import {
    modalStyles,
    ActionMore,
    Wrap,
    Ul,
} from "./styles";

const ConfirmDelete: React.FC<any> = (props) => {
    const { row } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [id, setID] = useState<number>(0);
    const dispatch = useDispatch();

    const handleClick = (row: any) => {
        if (row.id === id) {
            setID(0);
            return;
        }
        setID(row.id);
    };

    return (
        <>
            <Wrap>
                <ActionMore
                    src={img.iconMore}
                    onClick={() => handleClick(row)}
                    alt="icon"
                    className="icon-more"
                />
                <Ul {...props} active={id === row.id} className="pop-up">
                    <DeleteModal row={row} />
                </Ul>
                <Close setID={(e: any) => setID(e)} />
            </Wrap>

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
                    {({ values, isSubmitting }) => (
                        <Form>
                            <FormBody
                                row={row}
                                values={values}
                                setIsOpen={setIsOpen}
                                load={isSubmitting}
                            />
                        </Form>
                    )}
                </Formik>
            </Modal>
        </>
    );
};

export default ConfirmDelete;
