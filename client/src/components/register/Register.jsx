import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link}from "react-router-dom"

const Register = ()=> {
return(
<div>
    <h1>
        Aqui vendrá la pagina de Registro
    </h1>
    <Link 
            className="btn btn-outline-info my-2 my-sm-0" 
            type="submit" 
            to="/"
            >Volver</Link>
    
</div>
)

}
export default Register;