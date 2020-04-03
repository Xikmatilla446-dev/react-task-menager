import React, {useEffect} from 'react';
import {withRouter} from "react-router-dom";
import firebase from '../../Firebase';




import Spinner from "../Molecules/spinner";

import { FaTrash, FaEdit,FaEye, FaAddressBook} from 'react-icons/fa';

import {ID, Tr2, Table2, Thead2, Tbody2, Th2, Td2, DivIcon, Hover, Button} from "../globalElemnet/globalElements";

const TableComponent = ({id, dataItem,handlerOption, history}) => {


    return (

        <div>
            {
                dataItem ? (

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
                                {
                                    id ?

                                        dataItem.filter((item, idx) => {
                                            debugger
                                            return id == idx
                                        }).map((item, index) => (
                                            <Tr2 key={index}>
                                                <ID>{index + 1}</ID>
                                                <Td2>{item.taskName}</Td2>
                                                <Td2>{item.Description}</Td2>
                                                <Td2>{item.CreatedDate}</Td2>

                                                <React.Fragment>
                                                    <DivIcon>
                                                        <Hover><FaEdit onClick={handlerOption}/></Hover>
                                                        <Hover><FaTrash onClick={handlerOption}/></Hover>
                                                        <Hover><FaEye
                                                            onClick={() => {
                                                                history.push('/' + index)
                                                            }}

                                                        /></Hover>
                                                    </DivIcon>
                                                </React.Fragment>
                                            </Tr2>
                                        )) :

                                        dataItem.map((item, index) => (
                                            <Tr2 key={index}>
                                                <ID>{index + 1}</ID>
                                                <Td2>{item.taskName}</Td2>
                                                <Td2>{item.Description}</Td2>
                                                <Td2>{item.CreatedDate}</Td2>

                                                <React.Fragment>
                                                    <DivIcon>
                                                        <Hover><FaEdit onClick={handlerOption}/></Hover>
                                                        <Hover><FaTrash onClick={handlerOption}/></Hover>
                                                        <Hover><FaEye
                                                            onClick={() => {
                                                                history.push('/' + index)
                                                            }}

                                                        /></Hover>
                                                    </DivIcon>
                                                </React.Fragment>
                                            </Tr2>
                                        ))}
                            </Tbody2>
                        </Table2>
                    )
                    : (<Spinner/>)
            }

        </div>
    )
}

export default withRouter(TableComponent);
