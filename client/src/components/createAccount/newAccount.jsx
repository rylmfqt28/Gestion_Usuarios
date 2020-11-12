import React, {Fragment, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './newAccount.css'
import { Link } from "react-router-dom"
import axios from 'axios';
import logo from '../img/logo.png';
import ModalSolicitudC from './ModalSolicitudC';
import { useForm } from 'react-hook-form';
//import handleDeleteKey from './validacionesNewAccount';
//import ValidacionesNewAccount from './validacionesNewAccount';
const NewAccount = () => {

const [datosRegistro, setDatosRegistro] = useState({
        nombre: '',
        apellido: '',
        ci: '',
        genero: '',
        pais: '',
        ciudad: '',
        direccion: '',
        correo: '',
        telefono: '', 
        userName: '',
        password: '', 
})


const restartForm = () => {
  setDatosRegistro({
      ...datosRegistro,
      nombre: '',
        apellido: '',
        ci: '',
        genero: '',
        pais: '',
        ciudad: '',
        direccion: '',
        correo: '',
        telefono: '', 
        userName: '',
        password: '', 
  });
}


const { register, errors, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        console.log(data)
        e.target.reset()
    }

const {nombre,apellido,ci,genero,pais, ciudad, direccion, correo,telefono,userName, password}=datosRegistro
    const validar = (event) => {
      let key = event.keyCode || event.which;
      let tecla = String.fromCharCode(key);
      let letras = " áéíóúñÑ";
      let letrasContraseña="áéíóúñÑ*";
      let numeros = "1234567890"
      if (datosRegistro.nombre.length !== 50) {
          console.log('llego malditod');
          if ((key <= 90 && key >= 65) || (key <= 122 && key >= 97) || (key === 164) || (key === 165) || (letras.indexOf(tecla) !== -1)) {
              setDatosRegistro({
                  ...datosRegistro,
                  [event.target.name]: event.target.value + tecla
              });
          }
      } else {
          alert('El maximo de caracteres es de 50');
      }
      //Validacion campo apellido
      
      if (datosRegistro.apellido.length !== 50) {
          console.log('llego malditod');
          if ((key <= 90 && key >= 65) || (key <= 122 && key >= 97) || (key === 164) || (key === 165) || (letras.indexOf(tecla) !== -1)) {
              setDatosRegistro({
                  ...datosRegistro,
                  [event.target.name]: event.target.value + tecla
              });
          }
      } else {
          alert('El maximo de caracteres es de 50');
      }
      // validacion nombre de usuario
      if (datosRegistro.userName.length !== 15) {
        console.log('llego malditod');
        if ((key <= 90 && key >= 65) || (key <= 122 && key >= 97) || (key === 164) || (key === 165) || (letras.indexOf(tecla) !== -1)|| (numeros.indexOf(tecla)!==-1)) {
            setDatosRegistro({
                ...datosRegistro,
                [event.target.name]: event.target.value + tecla
            });
        }
    } else {
        alert('El maximo de caracteres es de 50');
    }
      //validacion contraseña
      if (datosRegistro.password.length !== 20) {
        console.log('llego malditod');
        if ((key <= 90 && key >= 65) || (key <= 122 && key >= 97) || (key === 164) || (key === 165) || (letrasContraseña.indexOf(tecla) !== -1)|| (numeros.indexOf(tecla)!==-1)) {
            setDatosRegistro({
                ...datosRegistro,
                [event.target.name]: event.target.value + tecla
            });
        }
    } else {
        alert('Minimo 8 caracteres');
    }


      
  }
  const validarNumeros =(event)=>{
    let key = event.keyCode || event.which;
    let tecla = String.fromCharCode(key);
    if(datosRegistro.ci.length!==9){
      if(datosRegistro.ci.length<=7){
        setDatosRegistro({  
            ...datosRegistro,
            [event.target.name]: event.target.value + tecla
        });
      }else{
      alert('El minimo de digitos en el campo es de 7')
      }
    
      setDatosRegistro({  
          ...datosRegistro,
          [event.target.name]: event.target.value + tecla
      });
    }else{
    alert('El maximo de digitos en el campo es de 9')
    }
    

  }
  const validarTelefono =(event)=>{
    let key = event.keyCode || event.which;
    let tecla = String.fromCharCode(key);
    if(datosRegistro.telefono.length!==8){
      
        setDatosRegistro({  
            ...datosRegistro,
            [event.target.name]: event.target.value + tecla
        });    
      }else{
        alert('El maximo de digitos en el campo es de 8')
        }
}
  const handleDeleteKey = (event) => {
        
    let key = event.keyCode || event.which;
    if (datosRegistro.nombre.length !== 0 && (key === 8 || key === 127)) {
        let nuevo = datosRegistro.nombre.substring(0, datosRegistro.nombre.length - 1);
        setDatosRegistro({
            ...datosRegistro,
            [event.target.name]: nuevo
        });
    }
    // Borra para el campo apellido
    if (datosRegistro.apellido.length !== 0 && (key === 8 || key === 127)) {
      let nuevo = datosRegistro.apellido.substring(0, datosRegistro.apellido.length - 1);
      setDatosRegistro({
          ...datosRegistro,
          [event.target.name]: nuevo
      });
      // Borra para el campo CI
      
    }   
    if (datosRegistro.ci.length !== 0 && (key === 8 || key === 127)) {
      let nuevo = datosRegistro.ci.substring(0, datosRegistro.ci.length - 1);
      setDatosRegistro({
          ...datosRegistro,
          [event.target.name]: nuevo
      });

    }
      //borra campo telefono
    if (datosRegistro.telefono.length !== 0 && (key === 8 || key === 127)) {
      let nuevo = datosRegistro.telefono.substring(0, datosRegistro.telefono.length - 1);
      setDatosRegistro({
          ...datosRegistro,
          [event.target.name]: nuevo
      });

    }

      //borra campo nombre de usuario
      if (datosRegistro.userName.length !== 0 && (key === 8 || key === 127)) {
        let nuevo = datosRegistro.userName.substring(0, datosRegistro.userName.length - 1);
        setDatosRegistro({
            ...datosRegistro,
            [event.target.name]: nuevo
        });
  
      }
      //borra campo contraseña
      if (datosRegistro.password.length !== 0 && (key === 8 || key === 127)) {
        let nuevo = datosRegistro.password.substring(0, datosRegistro.password.length - 1);
        setDatosRegistro({
            ...datosRegistro,
            [event.target.name]: nuevo
        });
  
      }

}
 


return (
  
  <Fragment>
            <div>
      <div className="barraNav">
        <nav className="navbar navbar-light justify-content-between">
          <a className="navbar-brand" href="/">
            <img className="logo" src={logo} height="35" alt="logo" />
           </a>

        </nav>
      </div>


        

      <div>
      <h1 align="center"> Formulario de registro </h1>
      </div>
      <div className="contenedor">

        
        <form>
       
         <label>
                <div>
                <b> Nombres:</b>
                <input
                type="text"
                class="imput"
                size="60"
                placeholder="Ingrese sus nombres"
                name="nombre"
                onKeyPress={validar}
                onKeyDown={handleDeleteKey}
               
                value={nombre}
                required
                            
                />
                </div>
             </label>
              <br />

              <label>
                
                <div>
                <b>Apellidos: </b>
                <input
                type="text"
                className="imput"
                size="60"
                placeholder="Ingrese su Apellidos"
                name="apellido"
                onKeyPress={validar}
                onKeyDown={handleDeleteKey}
                value={apellido}
                required
                />
                </div>
               
              </label>
              <br />
              <label>
                <b>Cédula de Identidad:</b>
                <input
                type="number"
                className="imput"
                size="60"
                placeholder="Ingrese su cédula de identidad"
                name="ci"
                
                ref={
                  register({
                      max: {
                          value: 7, message: 'son 7 digitos como minimo'
                      }
                    })
                  }
                onKeyPress={validarNumeros}
                onKeyDown={handleDeleteKey}
                value={ci}
                required
                
              />
                      </label>
              <br />
              <div></div>

              <label className="radio">
                <b>Género:</b>  
                      </label>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                required
                
              />
              <label for="male" className="radio">
                Masculino
                      </label>
              
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                required
              />
              <label for="female" className="radio">
                Femenino
                      </label>
              
              <input
                type="radio"
                id="other"
                className="radioButton"
                name="gender"
                value="other"
                required
              />
              <label for="other" className="radio">
                Otro
                      </label>
              <br />
              
              <label> 
                <div><b>Pais:</b> 
                <select  className="imput" required
                      >
                      <option value ="" >Seleccione una opción</option>
                      <option value ="1" >{"---"}</option>
                      <option value ="2" >{"----"}</option>
                      
                      </select></div>
                
              </label>
              <br />
              
              <label> 
              <div>
                <b>Ciudad:</b> 
                <select  className="imput" required
                      >
                      <option value ="" >Seleccione una opción</option>
                      <option value ="1" >{"---"}</option>
                      <option value ="2" >{"----"}</option>
                      </select></div>
                
              </label>
              <br />
              
              <label>
                <div>
                <b>Dirección:</b>
                <input
                type="text"
                className="imput"
                size="60"
                placeholder="Ingrese su dirección"
                name="direccion"
                maxLength="250"
                required
              />
                </div>
                
              </label>
              <br />
              
              <label>
                <div>
                <b>Correo Electronico:</b>
                <input
                type="text"
                className="imput"
                size="60"
                minLength="3"
                placeholder="Ingrese su dirección de correo"
                name="correo"
                required
              />
                </div>
              </label>
              <br />
              
              <label>
                <div>
                <b>Teléfono:</b>
                <input
                type="number"
                className="imput"
                size="60"
                placeholder="Ingrese su número telefónico"
                name="telefono"
                maxLength="8"
                required
                onKeyPress={validarTelefono}
                onKeyDown={handleDeleteKey}
                value={telefono}
               />
                </div>
                
                </label>
              <br />
              
              <label>
                <div>
                <b>Nombre de usuario:</b>
                <input
                type="text"
                className="imput"
                size="60"
                placeholder="Ingrese su nombre de usuario"
                name="userName"
                minLength="5"
                maxLength="15"
                onKeyPress={validar}
                onKeyDown={handleDeleteKey}
                value={userName}
                required
              
              />
                </div>
                
                      </label>
              <br />
              
              <label> 
                <div>
                <b>Tipo de usuario:</b> 
                <select  className="imput" required
                         data-toggle="modal"
                         data-target="#TipoUserData"  
                         onChange={""}>
                      <option value ="1" >{"Administrador"}</option>
                      <option value ="2" >{"Delivery"}</option>
                 </select>
                </div>
                
              </label>
              <br />
              <label>
                <div>
                <b>Contraseña:</b>
                <input
                type="password"
                className="imput"
                size="60"
                placeholder="Ingrese su contraseña"
                name="password"
                minLength="8"
                required
              /*  onClick={validar}
                onKeyDown={handleDeleteKey}
                value={password}
              *//>
                </div>
                
                      </label>
              <br />
              
              <label>
                <div><b>Confirmar contraseña:</b>
                <input
                type="password"
                className="imput"
                size="60"
                placeholder="Confirme su contraseña"
                name="conf-password"
                minLength="8"
                required
              /></div>
              </label>
              <br />
  
                  <div className="checkbox-confirmar">

                  <input type="checkbox" name="aceppt" required value=""/>  <label>
                  <b>acepto los</b> 
                  <a href="/register">
                   <b>Términos y condiciones</b>
                        </a>
                  </label>
                  </div>

                  <div>
             
                  <button className="btn btn-cancelar" value="Login" type="reset" onClick={restartForm} href="/" >Cancelar</button>

                  <button className="btn btn-aceptar " value="Login" >Registrar</button>
          
                  </div>
        </form>

            <div>
             <ModalSolicitudC
               crearTipo= {"Administrador"}
               descripcionTipo= {""}
             />
           </div> 

      </div>

  </div>

  </Fragment>


);
}

export default NewAccount;
