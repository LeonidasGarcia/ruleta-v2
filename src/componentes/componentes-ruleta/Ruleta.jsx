import React, { useState, useContext } from 'react'
import { Wheel } from 'react-custom-roulette'
import { useOpcionesContext } from '../../ProviderOpciones/ProviderOpciones';

import '../../estilos/estilos-componentes-ruleta/Ruleta.css'

export function Ruleta () {

    //Estados
    const [mustSpin, setMustSpin] = useState(false);
    const [ganador, setGanador] = useState(0);
    
    const opciones = useContext(useOpcionesContext());

  const manejarClick = () => {
        if (!mustSpin) {
        const nuevoGanador = Math.floor(Math.random() * opciones.length);
        setGanador(nuevoGanador);
        setMustSpin(true);
        }
      }

    return (
        <div className='contenedorRuleta'>
        <Wheel  
        className='Ruleta'
        fontFamily='Chewy'
        fontSize={25}
        outerBorderColor='#fff'
        radiusLineWidth={0}
        outerBorderWidth={7}
        mustStartSpinning={mustSpin}
        prizeNumber={ganador}
        data={(opciones.length === 0) ? [{}] : opciones}
        disableInitialAnimation={true}

        onStopSpinning={() => {
          setMustSpin(false);
        }}

        />
        <div className='ContenedorBotonGiro'>
        <button className='BotonGiro' onClick={()=>{manejarClick()}} >Girar!</button>
        </div>
        </div>
  )
}
