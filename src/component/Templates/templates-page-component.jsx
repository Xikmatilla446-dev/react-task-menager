import React, {useState,useEffect} from 'react';
import { DivHome } from "../globalElemnet/globalElements";
import ModalComponent from "../Organisms/ModalComponent";
import TableComponent from "../Molecules/customTable";


import {createEffect, createStore} from 'effector'
import {createComponent} from 'effector-react'
import {fetchData} from "../../_helpers/apiService";


const asyncActionFx = createEffect('your async action')

asyncActionFx.use(() => fetchData())

const currentUser = createStore(null).on(
    asyncActionFx.done,
    (state, {result}) => {
        debugger
        return result
    },)






const TemplatesPage = () => {


    useEffect(()=> {

        asyncActionFx();

        },[])

    const [selectedOption, setselectedOption] = useState(false);

    const handlerOption = () => {

        setselectedOption(!selectedOption)
    };


    const CurrentUser = createComponent(currentUser, (props, dataItem) =>
        dataItem ? <TableComponent dataItem={dataItem}  handlerOption={handlerOption}/> : <div>Loading</div>,
    );

    return (
        <DivHome>


            <CurrentUser/>

            <ModalComponent
                selectedOption={selectedOption}
                handlerOption={handlerOption}
                title="Add task"/>
        </DivHome>

    )

};
export default TemplatesPage;
