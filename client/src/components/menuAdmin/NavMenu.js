import React from "react";
import '../menuAdmin/menu.css';

import logo from '../img/logo.png';
import menu from '../img/menu.png';
import { Link } from "react-router-dom";

const BarraMenu = props => {

    const salir = () => {
        sessionStorage.removeItem("authToken");
    }
    const mostrarMenu=()=> {
        var btnMenu = document.getElementById('btn-menu');
        var nav = document.getElementById('nav');
        nav.classList.toggle('mostrar');

    }

    return (
        <div className="barraNav">
            <nav className="navbar navbar-light justify-content-between">
                <a className="navbar-brand" href="/crearTipoUsuario">
                    <img className="logo" src={logo} height="35" alt="logo" />
                </a>
                <a className="nav-menu" id="btn-menu"  onClick={mostrarMenu}>

                    <img className="icono-menu" src={menu} />

                </a>

                <div className="nav" id="nav">
                    <ul className="menu">
                        <div className="menu__item"><Link className="menu__link" to="">Administrar cuenta</Link></div>
                        <div className="menu__item"><Link className="menu__link" to="/crearTipoUsuario">Crear tipo de usuario</Link></div>
                        <div className="menu__item"><Link className="menu__link" to="">Lista de usuarios</Link></div>
                        <div className="menu__item"><Link className="menu__link" to="">Modificar tipo de usuario</Link></div>
                        <div className="menu__item"><Link className="menu__link" to="/solicitudes">Solicitudes</Link></div>
                        <div className="menu__item"><Link className="menu__link" to="">Administrar permisos</Link></div>
                        <div className="menu__item"><Link className="menu__link" to="/" onClick={salir} >Salir</Link></div>

                    </ul>
                </div>
            </nav>
            <script src="/MostarMenu.js"></script>
        </div>
          
    );
}

export default BarraMenu;