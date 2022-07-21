import React from 'react'
import styled from 'styled-components';

const ButtonStyled = styled.button`
    background-color: #0B5ED7;
    border-radius: 5px;
	color: white;
	height: 25px;
    border: none;
	margin-top: 2%;
	cursor: pointer;
`

const ListStyled = styled.div`
	width: 20vw;
	margin: auto;
	padding-bottom: 1%;
	margin-top: 0;
	border: solid 2px black;
	border-radius: 0 0 5px 5px;
`

export const List = props => {	
	const {lista, setLista} = props;
	
	const tarea = lista.map(item=>{
		return <h3>{item.tarea}</h3>
	})

	const borrar = ((e)=> {
		tarea.length = 0;
		setLista(tarea);
	});

  return (
	<ListStyled>
		{tarea}
		<ButtonStyled onClick={borrar}>Borrar</ButtonStyled>
	</ListStyled>	
  )
}
