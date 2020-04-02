import React, {useState} from 'react';
import { DivHome } from "../globalElemnet/globalElements";
import ModalComponent from "../Organisms/ModalComponent";
import { FaBeer } from 'react-icons/fa';
import TableComponent from "../Molecules/customTable";



const TemplatesPage = () => {


    const [selectedOption, setselectedOption] = useState(false);

    const handlerOption = () => {

        setselectedOption(!selectedOption)
    };

    return (
        <DivHome>
            <TableComponent  handlerOption={handlerOption}/>

            <ModalComponent
                selectedOption={selectedOption}
                handlerOption={handlerOption}
                title="Add task"/>
        </DivHome>

    )

};
export default TemplatesPage;
