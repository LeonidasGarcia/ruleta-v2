import React, { useState, useEffect } from 'react'
import { Wheel } from 'react-custom-roulette'

import '../../estilos/estilos-componentes-ruleta/Ruleta.css'

export function Ruleta ({nuevaOpcion, enviarOpciones, opcionesActuales, obtenerGanador}) {

    //Estados
    const [mustSpin, setMustSpin] = useState(false);
    const [ganador, setGanador] = useState(0);
    const [opciones, setOpciones] = useState([{}]);

    
    useEffect(() => {
        if (nuevaOpcion.option !== '') {
          setOpciones(prevEstado => {
            if (Object.keys(prevEstado[0]).length === 0) return [nuevaOpcion];
            else return [...prevEstado, nuevaOpcion];
          });
      }
    }, [nuevaOpcion]);
  
    
    useEffect(()=>{
      if (opcionesActuales !== opciones) {
        if (Object.keys(opcionesActuales[0]).length === 0) {
          setOpciones([{}])
        } else {
          setOpciones(opcionesActuales)
        }
      }
    }, [opcionesActuales])

  enviarOpciones(opciones)

  const manejarClick = () => {
        if (!mustSpin) {
        const nuevoGanador = Math.floor(Math.random() * opciones.length);
        obtenerGanador(opciones[nuevoGanador].option)
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
        data={opciones}
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
