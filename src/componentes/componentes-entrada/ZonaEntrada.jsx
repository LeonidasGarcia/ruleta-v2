import { Entrada } from './Entrada';
import { AreaOpciones } from './AreaOpciones'

import '../../estilos/estilos-componentes-entrada/ZonaEntrada.css'

export function ZonaEntrada ({escucharEnter, opciones, eliminarOpcion}) {
    return (
      <div className="ZonaEntrada">
        <Entrada />
        <AreaOpciones />
      </div>  
    );
}