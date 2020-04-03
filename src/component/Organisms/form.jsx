import React, {useState} from 'react';
import FormInput from '../Molecules/input';
import CustomButton from '../Molecules/customButton';

import { FormElement, GridTwo } from "../globalElemnet/globalElements";
import DataPicker from "../Molecules/dataPicker";
import {handleSubmitData, fetchData} from "../../_helpers/apiService";

import moment from 'moment';
import 'react-dates/initialize';
import "react-dates/lib/css/_datepicker.css";
import {createEffect, createStore} from 'effector'
import {createComponent} from 'effector-react'

const asyncActionFx = createEffect('your async action')

asyncActionFx.use((payload) => handleSubmitData(payload))

const current = createStore(null).on(
    asyncActionFx.done,
    (state, {result}) => {
        debugger
        return result
    },)


const CurrentResult = createComponent(current, (props, user) =>
    user ? <div>Loading ...(<p>yes</p>)</div> : <div>Laoding feel</div>,
)


const now = moment();


const Form = ({handlerOption}) => {


    const [taskName, settaskName] = useState('');
    const [Description, setDescription] = useState('');
    const [CreatedDate, setCreatedDate] = useState(now);


    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(CreatedDate._d)
        debugger
        const data = {
            taskName: taskName,
            Description:Description,
            CreatedDate:CreatedDate._d
        };


        debugger
        asyncActionFx(data);

        console.log(current.getState());
        debugger




        setTimeout(()=> {
            handlerOption();

        },5000)

    };





    return(

            <FormElement onSubmit={handleSubmit}>
                <FormInput
                    value={taskName}
                    name="taskName"
                    type="text"
                    onChange={(e)=>settaskName(e.target.value)}
                    lable="taskName"
                    required
                />

                <FormInput
                    value={Description}
                    name="Description"
                    type="text"
                    onChange={(e)=>setDescription(e.target.value)}
                    lable="Description"
                    required
                />


                <DataPicker
                    value={CreatedDate}
                    onChange={(createdAt) =>

                    setCreatedDate(createdAt.format())}
                    type="date"
                    required
                />
                <br/>
                <GridTwo>
                    <CustomButton
                        handlerOption={handlerOption}
                        exit="red">Exit</CustomButton>
                    <CustomButton save="green">Save</CustomButton>
                </GridTwo>

            </FormElement>

    )

};
export default Form;
