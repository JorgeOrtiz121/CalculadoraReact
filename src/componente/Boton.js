import React, { Component } from 'react';
import '../estiloscalculadora/estilosboton.css';

function Boton(props) {

const esoperador=(valor)=>{
    return isNaN(valor) && (valor !='.') && (valor !='=');
}
    return (
      <div className={`Botones-General ${esoperador(props.children) ? "operador":"elemento" }`} 
      onClick={()=>props.manejarboton(props.children)}>
      {props.children}
      </div>
    );
  }
  
  export default Boton;
  