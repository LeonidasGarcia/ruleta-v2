import { useState } from "react";

import { Cabecera } from "../componentes/componentes-cabecera/Cabecera";
import { Ruleta } from "../componentes/componentes-ruleta/Ruleta";
import { ZonaEntrada } from "../componentes/componentes-entrada/ZonaEntrada";
import { ZonaDatos } from "../componentes/componentes-datos/ZonaDatos";

import '../estilos/SuperComponente.css'

export function SuperComponente () {

    const [opcion, setOpcion] = useState({});
    const [opciones, setOpciones] = useState([{}]);

    const escucharEnter = (nuevaOpcion) => {
        setOpcion(nuevaOpcion);
    }

    const enviarOpciones = (opc) => {
        setOpciones(opc)
    }

    const eliminarOpcion = (opcionEliminada)=> {
        if (opciones.length === 1) setOpciones([{}])
        else setOpciones(opciones.filter(opcion=>opcion.style.backgroundColor !== opcionEliminada));
    }

    const obtenerGanador = (ganador)=> {
        console.log(ganador)
    }

    return (
    <>
        <Cabecera/>
        <div className="ContenedorMain">
            <Ruleta nuevaOpcion = {opcion} enviarOpciones={enviarOpciones} opcionesActuales={opciones} obtenerGanador={obtenerGanador}/>
            <div className="ContenedorInputs">
                <ZonaEntrada escucharEnter={escucharEnter} opciones={opciones} eliminarOpcion={eliminarOpcion}/>
                <ZonaDatos/>
            </div>
        </div>
    </>
    );
}