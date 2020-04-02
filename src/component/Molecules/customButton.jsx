import React from 'react'
import { Button } from "./elements";




const CustomButton = ({children, save, exit}) =>(

    <Button
        currentColor={save}
        currentColor={exit}
    >
        {children}
    </Button>
);

export default CustomButton;
