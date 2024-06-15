import React, { useState } from 'react'

const opcionesContext = React.createContext();
const borrarOpcionContext = React.createContext();
const agregarOpcionContext = React.createContext();

export const useOpcionesContext = () => {
    return opcionesContext
};
export const useBorrarOpcionContext = () => {
    return borrarOpcionContext;   
}
export const useAgregarOpcionContext = () => {
    return agregarOpcionContext;
}

export const OpcionesContext = ({children}) => {

    const [opciones, setOpciones] = useState([]);

    //Recibe una opcion completa
    const borrarOpcion = (backgroundColorDeLaOpcionABorrar) => {
        let nuevasOpciones = [...opciones];
        setOpciones(nuevasOpciones.filter(opcion=>opcion.style.backgroundColor !== backgroundColorDeLaOpcionABorrar))
        console.log("borrado existoso")
    }

    const agregarOpcion = (opcionNueva) => {
        let nuevasOpciones = [...opciones];
        nuevasOpciones.push(opcionNueva);
        setOpciones(nuevasOpciones);
    }

    return (
        <opcionesContext.Provider value={opciones}>
            <borrarOpcionContext.Provider value={borrarOpcion}>
                <agregarOpcionContext.Provider value={agregarOpcion}>
                    {children}
                </agregarOpcionContext.Provider>
            </borrarOpcionContext.Provider>
        </opcionesContext.Provider>
    );

}