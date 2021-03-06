import React from "react";
import './menu.css';

import logo from '../img/logo.png';
import menu from '../img/menu.png';
import { Link } from "react-router-dom";

const BarraMenuUser = props => {

    const salir = () => {
        sessionStorage.removeItem("authToken");
        sessionStorage.removeItem("ci");
    }
    const mostrarMenu=()=> {
        //var btnMenu = document.getElementById('btn-menu');
        var nav = document.getElementById('nav');
        nav.classList.toggle('mostrar');

    }

    return (
        <div className="barraNav">
            <nav className="navbar navbar-light justify-content-between">
                <a className="navbar-brand" href="/home">
                    <img className="logo" src={logo} height="35" alt="logo" />
                </a>
                <a className="nav-menu" id="btn-menu"  onClick={mostrarMenu}>

                    <img className="icono-menu" height="40" src={menu} alt="menu"/>

                </a>

                <div className="nav" id="nav">
                    <ul className="menu">
                        <div className="menu__item"><Link className="menu__link" to="/modifyAccount">Administrar cuenta</Link></div>
                        <div className="menu__item"><Link className="menu__link" to="/" onClick={salir} >Salir</Link></div>

                    </ul>
                </div>
            </nav>
        
        </div>
          
    );
}

export default BarraMenuUser;