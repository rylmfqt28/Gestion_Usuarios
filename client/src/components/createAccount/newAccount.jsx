import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './newAccount.css'
import { Link } from "react-router-dom"
import { Fragment, useState } from 'react';
import axios from 'axios';
import logo from '../img/logo.png';

const newAccount = () => {

return (
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
          <label >
                 <b> Nombres:</b>
                  <input
                  type="text"
                  class="imput"
                  size="60"
                  placeholder="Ingrese sus nombres"
                  name="nombres"
                />
                        </label>
                <br />
                <label><b>Apellidos: </b>
                <input
                  type="text"
                  className="imput"
                  size="60"
                  placeholder="Ingrese su Apellidos"
                  name="apellidos"
                />
                </label>
                <br />
                <label>
                  <b>Cédula de Identidad:</b>
                  <input
                  type="text"
                  className="imput"
                  size="60"
                  placeholder="Ingrese su cédula de identidad"
                  name="cedula"
                />
                        </label>
                <br />
                

                <label className="radio">
                  <b>Género:</b>  
                        </label>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  
                />
                <label for="male" className="radio">
                  Masculino
                        </label>
                
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
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
                />
                <label for="other" className="radio">
                  Otro
                        </label>
                <br />
                <label> <b>Pais:</b> 
                <select  className="imput" 
                        >
                        <option value =" " >{"---"}</option>
                        
                        </select>
                </label>
                <br />
                
                <label> <b>Ciudad:</b> 
                <select  className="imput" 
                        >
                        <option value =" " >{"---"}</option>
                        
                        </select>
                </label>
                <br />
                
                <label>
                  <b>Dirección:</b>
                  <input
                  type="text"
                  className="imput"
                  size="60"
                  placeholder="Ingrese su dirección"
                  name="direccion"
                />
                        </label>
                <br />
                
                <label>
                  <b>Correo Electronico:</b>
                  <input
                  type="text"
                  className="imput"
                  size="60"
                  placeholder="Ingrese su dirección de correo"
                  name="correo"
                />
                        </label>
                <br />
                
                <label>
                  <b>Teléfono:</b>
                  <input
                  type="text"
                  className="imput"
                  size="60"
                  placeholder="Ingrese su número telefónico"
                  name="telefono"
                />
                        </label>
                <br />
                
                <label>
                  <b>Nombre de usuario:</b>
                  <input
                  type="text"
                  className="imput"
                  size="60"
                  placeholder="Ingrese su nombre de usuario"
                  name="nombres"
                />
                        </label>
                <br />
                
                <label> <b>Tipo de usuario:</b> 
                <select  className="imput" 
                        >
                        <option value =" " >{"---"}</option>
                        
                        </select>
                </label>
                <br />
                <label>
                  <b>Contraseña:</b>
                  <input
                  type="password"
                  className="imput"
                  size="60"
                  placeholder="Ingrese su contraseña"
                  name="password"
                />
                        </label>
                <br />
                
                <label>
                  <b>Confirmar contraseña:</b>
                  <input
                  type="password"
                  className="imput"
                  size="60"
                  placeholder="Confirme su contraseña"
                  name="conf-password"
                />
                        </label>
                <br />
    
                    <div className="checkbox-confirmar">

                    <input type="checkbox" name="aceppt" value=""/>  <label>
                    <b>acepto los</b> 
                    <a href="/register">
                     <b>Términos y condiciones</b>
                          </a>
                    </label>
                    </div>
                    <button className="btn btn-cancelar" value="Login" >Cancelar</button>
                    <button className="btn btn-aceptar " value="Login" >Registrar</button>
                
        </div>

    </div>


);
}
export default newAccount;