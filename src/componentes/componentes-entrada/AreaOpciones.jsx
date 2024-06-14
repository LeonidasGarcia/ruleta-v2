import { FaRegTrashAlt } from 'react-icons/fa';

import '../../estilos/estilos-componentes-entrada/AreaOpciones.css'

export function AreaOpciones ({opciones, eliminarOpcion}) {

    if (Object.keys(opciones[0]).length === 0) {
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
                        <FaRegTrashAlt color={opcion.style.backgroundColor} onClick={()=>eliminarOpcion(opcion.style.backgroundColor)}/>
                        </div>
                        
                );
                })}
                </div>
            </div>
        );
    }


}