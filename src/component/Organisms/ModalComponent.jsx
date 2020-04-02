import React, {useState} from 'react';
import Modal from 'react-modal';
import Form from "./form";
import { H1 } from "../globalElemnet/globalElements";
import './globalStyles.scss'

const customStyles = {
    content: {
        top: '50px',
        marginLeft: '200px',
        right: 'auto',
        bottom: 'auto',
        width: "800px"
    }
};


const ModalComponent = ({handlerOption,selectedOption, title}) => {


    return (
        <Modal
            style={customStyles}
            isOpen={!!selectedOption}
            closeTimeoutMS={200}
            className="modal"
        >
          <H1>{title}</H1>
            <Form handlerOption={handlerOption}/>
            <button onClick={handlerOption}>test</button>

        </Modal>

    )

};
export default ModalComponent;
