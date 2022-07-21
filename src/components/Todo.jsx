import React, { useState } from 'react'
import styled from 'styled-components';

const ButtonStyled = styled.button`
    background-color: #0B5ED7;
    border-radius: 5px;
    color: white;
    height: 25px;
    border: none;
    cursor: pointer;
`

const FormStyled = styled.form`
    width: 20vw;
    height: 15vh;
    margin: auto;
    margin-top: 10%;
    border: solid 2px black;
    border-bottom: none;
    border-radius: 5px 5px 0 0;
`
const InputStyled = styled.input`
    margin-right: 5%;
    border-radius: 5px;
`

export const Todo = props => {
    const {agregarTarea} = props
    const [tarea, setTarea] = useState("");

    const handleSubmit = e => {
        e.preventDefault();  
        agregarTarea({tarea});
        setTarea(""); 
    };

	return (
        <FormStyled onSubmit={handleSubmit}>
            <h2>Ingrese tarea</h2>
            <InputStyled type="text" 
            className='inputForm'
            onChange={e=> setTarea(e.target.value)}/>
            <ButtonStyled className='btnAgregar'
            disabled={!tarea}>
                Agregar
            </ButtonStyled>
        </FormStyled>
    );
}
