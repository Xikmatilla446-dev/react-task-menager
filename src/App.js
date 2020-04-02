import React from 'react';
import './App.css';
import styled, {ThemeProvider} from 'styled-components'
import {Button, H1} from './elements/Button';
import Counter from './component/testEffector';
import Form from "./component/Organisms/form";
import ModalComponent from "./component/Organisms/ModalComponent";


const theme = {

    primary: 'teal',
    secondary: 'green',
    font: 'sans-serif',
    alert: 'yellow',


};




function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Form/>

                <Counter/>
                <H1>Styled</H1>
                <ModalComponent title="Add task"/>
                <form action="">
                    <input type="text"/>
                    <button>create</button>
                    <Button color="primary">creare</Button>
                </form>
            </div>
        </ThemeProvider>
    );
}

export default App;
