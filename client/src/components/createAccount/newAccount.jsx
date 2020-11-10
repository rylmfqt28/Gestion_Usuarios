import React, {Fragment, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './newAccount.css'
import { Link } from "react-router-dom"
import axios from 'axios';
import logo from '../img/logo.png';

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
        password: ''  
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
        </div>
        <form className="RegisterForm">
            <div >
              <div>Nombres:
                
                <input
                  type="text"
                  className="form-control"
                  maxLength="50"
                  placeholder="Ingrese sus nombres"
                  name="nombres"
                />
              </div>
        
      
                  
              <div> <label>Apellidos: </label> 
                  <input
                  type="text"
                  className="form-control"
                  maxLength="50"
               
                  placeholder="Ingrese su Apellidos"
                  name="apellidos"
                  />
              </div>
                <div> Cédula de Identidad:
                  <input
                  type="number"
                  className="form-control"
                  maxLength="9"
                  
                  placeholder="Ingrese su cédula de identidad"
                  name="cedula"
                />
                </div>
              
                
                <div>
                <label>
                  Género:  
                        </label>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                />
                <label for="male">
                  Masculino
                        </label>

                        <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                />
                <label for="female">
                  Femenino
                        </label>   
                        <input
                  type="radio"
                  id="other"
                  name="gender"
                  value="other"
                />
                <label for="other">
                       Otro
                </label>
                <br />             
                </div>
                <div>
                <label>
                      Pais:
                </label>
                <br />

                <select>
                <option>------------ </option>


                </select>
                

                </div>
                
                <div className="city">
                <label>
                  Ciudad:
                        </label>
                <br/>
                <select name="" id="">
                  <option>------------</option>
                </select>
               

                </div>
                
                <div>
                <label>
                  Dirección:
                        </label>
                <input
                  type="text"
                  className="form-control"
                  maxLength="250"
                  placeholder="Ingrese su dirección"
                  name="direccion"
                />
                </div>
                <div>
                <label>
                  Correo Electronico:
                        </label>
                <input
                  type="text"
                  className="form-control"
                  maxLength="15"
                  minLength="5"
                  placeholder="Ingrese su dirección de correo"
                  name="correo"
                />
                </div>
                
                <div>
                <label>
                  Teléfono:
                        </label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  maxLength="8"
                  placeholder="Ingrese su número telefónico"
                  name="telefono"
                />
                </div>
                <div>
                <label>
                  Nombre de usuario:
                        </label>
                <input
                  type="text"
                  className="form-control"
                  maxLength="15"
                  minLength="5"
                  placeholder="Ingrese su nombre de usuario"
                  name="nombres"
                />


                </div>
                <div>
                <label>
                  Contraseña:
                        </label>
              
                <input
                  type="password"
                  className="form-control"
                  minLength="8"
                  placeholder="Ingrese su contraseña"
                  name="password"
                />
                <label>
                  Confirmar contraseña:
                        </label>
                </div>
                <div>
                <input
                  type="password"
                  className="form-control"
                  minLength="8"
                  placeholder="Confirme su contraseña"
                  name="conf-password"
                />
                </div>
      

                    <div className="checkbox">

                    <input type="checkbox"  name="aceppt" value=""/>  <label>
                    acepto los 
                    <a href="/register">
                     Términos y condiciones
                          </a>
                    </label>
                    </div>
                    <div>
                      <button className="btn btn-primary" value="Login" >Cancelar</button>
                      {"   "}
                      <button className="btn " value="Login" >Registrar</button>
                    </div>
                            
        </div>
        </form>
    </Fragment>
    


);
}
export default NewAccount;