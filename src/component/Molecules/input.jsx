import React from 'react'
import styled, {ThemeProvider} from "styled-components";


import { Input, Label } from "./elements";





const theme = {



};

const FormInput = ({handleChange, lable, ...otherProps }) =>(

    <div>

        <ThemeProvider theme={theme}>
            <Input onChange={handleChange} {...otherProps} />
            {
                lable ?
                    (<Label prop={`${otherProps.value.length ? 'shrink' : '' }`}>
                        {lable}
                    </Label>)
                    : null
            }

        </ThemeProvider>
    </div>

);

export default FormInput;
