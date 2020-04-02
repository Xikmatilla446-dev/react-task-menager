import React, {useState} from 'react';
import Modal from 'react-modal';
import Form from "./form";
import { H1 } from "../globalElemnet/globalElements";


const customStyles = {
    content: {
        top: '50px',
        marginLeft: '200px',
        right: 'auto',
        bottom: 'auto',
        width: "800px"
    }
};


const ModalComponent = ({title}) => {


    return (
        <Modal
            style={customStyles}
            isOpen={true}>
          <H1>{title}</H1>
            <Form/>

        </Modal>

    )

};
export default ModalComponent;
