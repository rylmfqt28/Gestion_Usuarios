import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link}from "react-router-dom"

const AdministrarCuenta = ()=> {
return(
<div>
    <h1>
        Pagina de Administrar Cuenta muy pronto!!!!
    </h1>
    <Link 
            className="btn btn-outline-info my-2 my-sm-0" 
            type="submit" 
            to="/home"
            >Volver</Link>
    
</div>
)

}
export default AdministrarCuenta;