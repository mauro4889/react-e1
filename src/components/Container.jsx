import React, { useState } from 'react';
import {Todo} from './Todo';
import {List} from './List'

export const Container = () => {
  const [lista, setLista] = useState([]);

  const agregarTarea = addItem =>{
    setLista([...lista, addItem]);
  }

  return (
    <div>
        <Todo agregarTarea={agregarTarea}/>
        <List lista={lista} setLista={setLista} />
    </div>    
  )
}
