import React, {Fragment, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './newAccount.css'
import { Link } from "react-router-dom"
import axios from 'axios';
import logo from '../img/logo.png';
import { useForm } from 'react-hook-form';
import RegistroService from '../../Service/RegistroService'
import { Component } from 'react';
//import handleDeleteKey from './validacionesNewAccount';
//import ValidacionesNewAccount from './validacionesNewAccount';

class NewAccount extends Component {
  constructor(props){
    super (props);
    this.state={
      nombre: "",
      apellido: "",
      ci: "",
      genero: "",
      pais: [],
      ciudad: [],
      direccion: "",
      correo: "",
      telefono: "", 
      userName: "",
      tipoUsuario:[],
      password: "",
      
    }


  }
     validarNombre = (event) => {

      let key = event.keyCode || event.which;
      let tecla = String.fromCharCode(key);
      let letras = " áéíóúñÑ";
      
      
      if (this.state.nombre.length !== 50) {
          console.log('llego malditod');
          if ((key <= 90 && key >= 65) || (key <= 122 && key >= 97) || (key === 164) || (key === 165) || (letras.indexOf(tecla) !== -1)) {
              this.setState ({
                  ...this.state,
                  [event.target.name]: event.target.value + tecla
              });
          }
      } else {
          alert('El maximo de caracteres es de 50');
      }
      //Validacion campo apellido
      
      
      
      // validacion nombre de usuario
      
      //validacion contraseña
      


      
  }
  
  validarApellido = (event) => {
    let key = event.keyCode || event.which;
      let tecla = String.fromCharCode(key);
      let letras = " áéíóúñÑ";
  if (this.state.apellido.length !== 50) {
    console.log('llego malditod');
    if ((key <= 90 && key >= 65) || (key <= 122 && key >= 97) || (key === 164) || (key === 165) || (letras.indexOf(tecla) !== -1)) {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value + tecla
        });
    }
} else {
    alert('El maximo de caracteres es de 50');
}

}

  validarNombreUsuario =(event)=>{
let key = event.keyCode || event.which;
      let tecla = String.fromCharCode(key);
      let letras = " áéíóúñÑ";
      let letrasContraseña="áéíóúñÑ*";
      let numeros = "1234567890"
if (this.state.userName.length !== 15) {
  console.log('llego malditod');
  if ((key <= 90 && key >= 65) || (key <= 122 && key >= 97) || (key === 164) || (key === 165) || (letras.indexOf(tecla) !== -1)|| (numeros.indexOf(tecla)!==-1)) {
      this.setState({
          ...this.state,
          [event.target.name]: event.target.value + tecla
      });
  }
} else {
  alert('El maximo de caracteres es de 50');
}
  }
   validarNumeros =(event)=>{
    let numeros = "1234567890"
    let key = event.keyCode || event.which;
    let tecla = String.fromCharCode(key);
    if(this.state.ci.length!==9){
      if ((key <= 57 && key >= 48) || (numeros.indexOf(tecla)!==-1)) {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value + tecla
        });
      }
    }else{
    alert('El maximo de digitos en el campo es de 9')
    }

  }
  validarTelefono =(event)=>{
    let key = event.keyCode || event.which;
    let tecla = String.fromCharCode(key);
    let numeros = "1234567890"
    if(this.state.telefono.length!==8 ){
    if ((key <= 57 && key >= 48) || (numeros.indexOf(tecla)!==-1)) {
      this.setState({
          ...this.state,
          [event.target.name]: event.target.value + tecla
      });
    }
    }else{
        alert('El maximo de digitos en el campo es de 8')
        }
  }




    validarContraseña=(event) =>{
      let key = event.keyCode || event.which;
      let tecla = String.fromCharCode(key);
      let numeros = "1234567890"
      let letrasContraseña="áéíóúñÑ*";
  if (this.password !== 8) {
    console.log('llego malditod');
    if ((key <= 90 && key >= 65) || (key <= 122 && key >= 97) || (key === 164) || (key === 165) || (letrasContraseña.indexOf(tecla) !== -1)|| (numeros.indexOf(tecla)!==-1)) {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value + tecla
        });
    }
  } else {
    alert('Minimo 8 caracteres');
  }
  }
   handleDeleteKey = (event) => {
        
    let key = event.keyCode || event.which;
    if (this.state.nombre.length !== 0 && (key === 8 || key === 127)) {
        let nuevo = this.state.nombre.substring(0, this.state.nombre.length - 1);
        this.setState({
            ...this.state,
            [event.target.name]: nuevo
        });
    }
    // Borra para el campo apellido
     




    if (this.state.ci.length !== 0 && (key === 8 || key === 127)) {
      let nuevo = this.state.ci.substring(0, this.state.ci.length - 1);
      this.setState({
          ...this.state,
          [event.target.name]: nuevo
      });


    }
      //borra campo telefono
    if (this.state.telefono.length !== 0 && (key === 8 || key === 127)) {
      let nuevo = this.state.telefono.substring(0, this.state.telefono.length - 1);
      this.setState({
          ...this.state,
          [event.target.name]: nuevo
      });

    }

      //borra campo nombre de usuario
      if (this.state.userName.length !== 0 && (key === 8 || key === 127)) {
        let nuevo = this.state.userName.substring(0, this.state.userName.length - 1);
        this.setState({
            ...this.state,
            [event.target.name]: nuevo
        });
  
      }
      //borra campo contraseña
      if (this.state.password.length !== 0 && (key === 8 || key === 127)) {
        let nuevo = this.state.password.substring(0, this.state.password.length - 1);
        this.setState({
            ...this.state,
            [event.target.name]: nuevo
        });
  
      }

}
handleDeleteKeyAp = (event) => {
  let key = event.keyCode || event.which;
if (this.state.apellido.length !== 0 && (key === 8 || key === 127)) {
  let nuevo = this.state.apellido.substring(0, this.state.apellido.length - 1);
  this.setState({
      ...this.state,
      [event.target.name]: nuevo
  });
  
}  
}
 updateListContries=(e)=>{
  RegistroService.getAllCountries(e.target.value).then(data => this.setState({pais: data}))
    console.log(e.target.value);
    this.updateListCities(e.target.value);
}
/*updateListCities=(e)=>{
  RegistroService.getAllCities(e.target.value).then(data => this.setState({ciudad: data}))
  console.log(e.target.value);
}*/

updateListCities=(pais)=>{
  RegistroService.getAllCities(pais).then(data => this.setState({ciudad: data}))
}
componentDidMount() {
  RegistroService.getAllCountries().then(data => this.setState({pais: data}))

}




render (){
  
  return(
      
            <div>
      <div className="barraNav">
        <nav className="navbar navbar-light justify-content-between">
          <a className="navbar-brand" href="/">
            <img className="logo" src={logo} height="35" alt="logo" />
           </a>
           <Link className="btn btn-outline-info" value="Login" type="reset"  to="/" >Iniciar Sesión</Link>
        </nav>
      </div>


        

      <div>
      <h1 align="center" className="titulo-registro"> Formulario de registro </h1>
      </div>
      <div className="contenedor">

        
        <form>
       
         <label>
                <div>
                <b> Nombres:</b>
                <input
                type="text"
                class="imput"
                size="70"
                placeholder="Ingrese sus nombres"
                name="nombre"
                onKeyPress={this.validarNombre}
                onKeyDown={this.handleDeleteKey}
                autocomplete="off"
                value={this.state.nombre}
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
                onKeyPress={this.validarApellido}
                onKeyDown={this.handleDeleteKeyAp}
                value={this.state.apellido}
                required
                />
                </div>
               
              </label>
              <br />
              <label>
                <b>Cédula de Identidad:</b>
                <input
                type="text"
                className="imput"
                size="60"
                placeholder="Ingrese su cédula de identidad"
                name="ci"
                
              
                onKeyPress={this.validarNumeros}
                onKeyDown={this.handleDeleteKey}
                value={this.state.ci}
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
                <select  className="imput" required onChange={this.updateListContries}>
                      <option value ="1" >{"Seleccione una Opción"}</option>
                     {this.state.pais.map((elemento,i) => (
                       <option key={i} value = {elemento.paisNombre}>
                        {elemento.paisNombre}
                      </option> ))}
                      </select>
                      </div>
                
              </label>
              <br />
              
              <label> 
              <div>
                <b>Ciudad:</b> 
                <select  className="imput" required >
                      <option value =" " >{"Seleccione una Opción"}</option>
                     {this.state.ciudad.map((elemento,i) => (
                       <option key={i} value = {elemento.ciudad}>
                        {elemento.ciudadNombre}
                      </option> ))}
                      
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
                type="text"
                className="imput"
                size="60"
                placeholder="Ingrese su número telefónico"
                name="telefono"
                maxLength="8"
                required
                onKeyPress={this.validarTelefono}
                onKeyDown={this.handleDeleteKey}
                value={this.state.telefono}
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
                onKeyPress={this.validarNombreUsuario}
                onKeyDown={this.handleDeleteKey}
                value={this.state.userName}
                required
              
              />
                </div>
                
                      </label>
              <br />
              
              <label> 
                <div>
                <b>Tipo de usuario:</b> 
                <select  className="imput" required
                >
                      <option value ="" >Seleccione una opción</option>
                      <option value ="1" >{"---"}</option>
                      <option value ="2" >{"----"}</option>
                      
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
                id="password"
                minLength="8"
                required
                
                />
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
                name="confPassword"
                id="confPassword"
                minLength="8"
                onBlur={this.validarContraseña}
                /*onKeyDown={handleDeleteKey}*/
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
             
                  <Link className="btn btn-cancelar" value="Login" type="reset"  to="/" >Cancelar</Link>

                  <button className="btn btn-aceptar " value="Login" >Registrar</button>
                  </div>
                  


        </form>
        
      </div>

  </div>
    )

 }
}

export default NewAccount;
