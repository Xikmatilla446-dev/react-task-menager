import React, {Component} from 'react';
import {withRouter} from "react-router-dom";


import data from './data';

import { FaTrash, FaEdit,FaEye, FaAddressBook} from 'react-icons/fa';

import {ID, Tr2, Table2, Thead2, Tbody2, Th2, Td2, DivIcon, Hover, Button} from "../globalElemnet/globalElements";

const TableComponent = ({handlerOption, history}) => {


    return (
        <div>
            <Table2>
                <Thead2>
                    <Tr2>
                        <ID>Id</ID>
                        <Th2>Name</Th2>
                        <Th2>Description</Th2>
                        <Th2>CreatedDate</Th2>
                        <Th2>Setting <Button onClick={handlerOption}>+<FaAddressBook/></Button></Th2>
                    </Tr2>
                </Thead2>
                <Tbody2>
                    {data.map((item, index) => (
                        <Tr2 key={index}>
                            <ID>{index + 1}</ID>
                            <Td2>{item.title}</Td2>
                            <Td2>{item.user}</Td2>
                            <Td2>{item.user}</Td2>
                            <DivIcon>
                                <Hover><FaEdit onClick={handlerOption}/></Hover>
                                <Hover><FaTrash onClick={handlerOption} /></Hover>
                                <Hover><FaEye
                                    onClick={()=> {
                                        history.push('/' + index)}}

                                /></Hover>
                            </DivIcon>
                        </Tr2>
                    ))}
                </Tbody2>
            </Table2>

        </div>
    )

}
export default withRouter(TableComponent);
