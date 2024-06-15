import { useContext, useRef } from 'react'
import { useAgregarOpcionContext } from '../../ProviderOpciones/ProviderOpciones'


import '../../estilos/estilos-componentes-entrada/Entrada.css'

export function Entrada () {

    const inputRef = useRef(null);
    const agregarOpcion = useContext(useAgregarOpcionContext());

    const escucharEnter = (e)=> {
        if (e.key === 'Enter') {
            const valorInput = inputRef.current.value
            const nuevaOpcion = { option: valorInput, style: { backgroundColor: '', textColor: '#fff' } };
            if (valorInput !== '') {
                nuevaOpcion.style.backgroundColor = generarNuevoColor();
                agregarOpcion(nuevaOpcion);
                inputRef.current.value = '';
            } 
        }
        
    }

    function generarNuevoColor() {
        var simbolos, color;
        simbolos = "0123456789ABCDEF";
        color = "#";
    
        for(var i = 0; i < 6; i++){
            color = color + simbolos[Math.floor(Math.random() * 16)];
        }
    
        return color;
    }

    return (
        <input 
            ref={inputRef}
            className='Entrada' 
            type='text' 
            placeholder='Agrega una opción'
            onKeyUp={(e)=>escucharEnter(e)}            
        />
    )
}