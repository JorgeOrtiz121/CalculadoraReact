import './App.css';
import Boton from './componente/Boton';
import Pantallita from './componente/Pantallita';
import casio from './imagenes/casio-logo.jpg'
import { useState } from 'react';
import {evaluate} from 'mathjs';
function App() {
const [estado,setestado]=useState('0');
const agregar=(valor)=>{
   setestado(estado+valor);
};

const resultado=()=>{
  setestado(evaluate(estado))
};
  return (
    <div className="App">
     <div className='Imagen'>
      <img src={casio} alt="Casio" className='Casio'/>
     </div>
     
     <div className='Contenido-Calculadora'>
     <div className='pantalla-respuesta'>
     <Pantallita input={estado}/>  
     </div>
        <div className='fila'>
        <Boton manejarboton={agregar}>1</Boton>
           <Boton manejarboton={agregar}>2</Boton>
           <Boton manejarboton={agregar}>3</Boton>
           <Boton manejarboton={agregar}>+</Boton>
        </div>
          
        <div className='fila'>
        <Boton manejarboton={agregar}>4</Boton>
           <Boton manejarboton={agregar}>5</Boton>
           <Boton manejarboton={agregar}>6</Boton>
           <Boton manejarboton={agregar}>-</Boton>
        </div>
         
        <div className='fila'>
        <Boton manejarboton={agregar}>7</Boton>
           <Boton manejarboton={agregar}>8</Boton>
           <Boton manejarboton={agregar}>9</Boton>
           <Boton manejarboton={agregar}>*</Boton>
        </div>
          
        <div className='fila'>
        <Boton manejarboton={agregar}>/</Boton>
           <Boton manejarboton={agregar}>%</Boton>
           <Boton manejarboton={resultado}>=</Boton>
           <Boton manejarboton={()=>setestado('')}>C</Boton>
           <Boton manejarboton={()=>setestado('No anda al gym ')}>Ella te ama ?</Boton>
        </div>
           
        <div className='fila'>

        </div>
     </div>
    </div>
  );
}

export default App;
