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





}
export default NewAccount;