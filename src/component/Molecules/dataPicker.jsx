import React, {useState} from 'react'
import moment from 'moment';
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";
import 'react-dates/initialize';


const now = moment();


const DataPicker = ({value,lable,onDataChange, ...otherProps }) =>{

    const [calendarFocused, setcalendarFocused] = useState(false);




    return (
            <SingleDatePicker
                date={value}
                onDateChange={onDataChange}
                focused={calendarFocused}
                onFocusChange={({ focused }) => setcalendarFocused(focused)}
                numberOfMonths={1}
                isOutsideRange={()=> false}
                {...otherProps }

            />

    )


};

export default DataPicker;
