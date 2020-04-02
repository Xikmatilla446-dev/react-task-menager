import React, {useState} from 'react';
import { DivHome } from "../../globalElemnet/globalElements";



const AboutPage = (props) => {

    console.log(props.match.params.post_id)
    return (
        <DivHome>
            <h1>About page</h1>
        </DivHome>

    )

};
export default AboutPage;
