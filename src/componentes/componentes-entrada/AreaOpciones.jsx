import { FaRegTrashAlt } from 'react-icons/fa';
import { useBorrarOpcionContext, useOpcionesContext } from '../../ProviderOpciones/ProviderOpciones';
import { useContext } from 'react';

import '../../estilos/estilos-componentes-entrada/AreaOpciones.css'


export function AreaOpciones () {

    const opciones = useContext(useOpcionesContext())
    const borrarOpcion = useContext(useBorrarOpcionContext())
    
    if (opciones.length === 0) {
        return (
            <div className="AreaOpciones"></div>
        );
    } else {
        return (
            <div className="AreaOpciones">
                <div className='ContenedorOpciones'>
                {opciones.map(opcion=>{
                    return (<div className='ContenedorOpcion'>
                        <div className='ContenedorColor'>
                            <div className='color' style={{backgroundColor: opcion.style.backgroundColor}}></div>
                        </div>
                        <div className='textoOpcion' style={{borderBottom: `1px solid ${opcion.style.backgroundColor}`}}>{opcion.option}</div>
                        <FaRegTrashAlt color={opcion.style.backgroundColor} onClick={()=>borrarOpcion(opcion.style.backgroundColor)}/>
                        </div>
                        
                );
                })}
                </div>
            </div>
        );
    }

}