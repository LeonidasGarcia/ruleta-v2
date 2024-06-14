import { useState } from 'react'

import '../../estilos/estilos-componentes-entrada/Entrada.css'

export function Entrada ({escucharEnter}) {

    
    const [nuevaOpcion, setNuevaOpcion] = useState({});

    const colorAleatorio = () => {
        let simbolos, color;
	    simbolos = "0123456789ABCDEF";
	    color = "#";

	    for(var i = 0; i < 6; i++){
		    color = color + simbolos[Math.floor(Math.random() * 16)];
	    }

        return color;
    }

    const manejarCambios = (e)=> {
        setNuevaOpcion({option: (e.target.value), style: { backgroundColor: colorAleatorio() , textColor: '#000'}});
    }

    return (
        <input 
            className='Entrada' 
            type='text' 
            placeholder='Agrega una opción'
            onChange={(e)=>manejarCambios(e)}
            onKeyUp={(e)=>{
                if (e.key === 'Enter' && e.target.value !== '') {
                    escucharEnter(nuevaOpcion);
                    setNuevaOpcion({});
                    e.target.value = "";
                }
            }}
        />
    )
}