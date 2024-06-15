import { OpcionesContext } from "../ProviderOpciones/ProviderOpciones";

import { Ruleta } from "../componentes/componentes-ruleta/Ruleta";
import { ZonaEntrada } from "../componentes/componentes-entrada/ZonaEntrada";
import { ZonaDatos } from "../componentes/componentes-datos/ZonaDatos";

import '../estilos/SuperComponente.css'

export function SuperComponente () {

    return (<>
        <OpcionesContext>
        <div className="ContenedorMain">
            <Ruleta />
            <div className="ContenedorInputs">
                <ZonaEntrada />
                <ZonaDatos/>
            </div>
        </div>
        </OpcionesContext>
    </>);
}