
import React, {useState} from 'react';


const ValidacionesNewAccount=(datosRegistro, setDatosRegistro)=>{
    
    const handleDeleteKey = (event) => {
        
        let key = event.keyCode || event.which;
        if (datosRegistro.nombre.length !== 0 && (key === 8 || key === 127)) {
            let nuevo = datosRegistro.nombre.substring(0, datosRegistro.nombre.length - 1);
            setDatosRegistro({
                ...datosRegistro,
                [event.target.name]: nuevo
            });
        }
    }

}

export default ValidacionesNewAccount;