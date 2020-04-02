import React, {useState} from 'react';
import FormInput from '../Molecules/input';
import CustomButton from '../Molecules/customButton';

import { FormElement, GridTwo } from "../globalElemnet/globalElements";
import DataPicker from "../Molecules/dataPicker";

import moment from 'moment';
import 'react-dates/initialize';
import "react-dates/lib/css/_datepicker.css";


const now = moment();


const Form = () => {


    const [taskName, settaskName] = useState('');
    const [Description, setDescription] = useState('');
    const [CreatedDate, setCreatedDate] = useState(now);
    const [Deadline, setDeadline] = useState(now);

    const onDataChange = (createdAt) => {
        setCreatedDate(createdAt);
    };




    return(

            <FormElement>
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
                    name="CreatedDate"
                    onChange={(createdAt) => setCreatedDate(createdAt)}
                    lable="CreatedDate"
                    type="date"
                    required
                />
                <br/>
                <GridTwo>
                    <CustomButton exit="red">Exit</CustomButton>
                    <CustomButton save="green">Save</CustomButton>
                </GridTwo>

            </FormElement>

    )

};
export default Form;
