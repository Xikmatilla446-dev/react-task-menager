import React from 'react'
import { Button } from "./elements";




const CustomButton = ({handlerOption,children, save, exit}) =>(

    <Button
        onClick={handlerOption}
        currentColor={save}
        currentColor={exit}
    >
        {children}
    </Button>
);

export default CustomButton;
