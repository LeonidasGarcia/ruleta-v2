import { Colecciones } from './Colecciones';
import { Estadisticas } from './Estadisticas';

import '../../estilos/estilos-componentes-datos/ZonaDatos.css'

export function ZonaDatos () {
    return (
        <div className="ContenedorDatos">
            <Colecciones/>
            <Estadisticas/>
        </div>
    );
}