import React from 'react';
import '../crearTipoUsuario.css';
import {Button} from '@material-ui/core';

class FormCrearTipoUsuario extends  React.Component{
    constructor(args){
        super(args)
        this.state ={
            users:[

            ]
        }

    }

    render(){
      
        return(
            
            <div className="crearTipoUsuario"> 
                    
                <h1 html>Crear Nuevo Tipo de Usuario</h1>
                <input clasName ="createusertype" id="createusertype" maxLength="20" type="text"></input>
                <br></br>
                
                
                <h1>Descripcion</h1>
                <div className="containerArea">
                    <textarea className="textArea" rows="10" cols="40">

                    </textarea>
                </div>
                <div>
                <Button variant="outlined" sized="large" color="primary" ></Button>
                </div>
            </div>
        )     

    }  
}
export default FormCrearTipoUsuario;