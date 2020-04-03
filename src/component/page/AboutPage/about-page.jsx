import React, {useState} from 'react';
import { DivHome } from "../../globalElemnet/globalElements";
import TemplatesPage from "../../Templates/templates-page-component";



const AboutPage = (props) => {

    console.log(props.match.params.post_id)
    return (
        <DivHome>
            <TemplatesPage id={props.match.params.post_id}/>
        </DivHome>

    )

};
export default AboutPage;
