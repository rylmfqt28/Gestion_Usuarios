import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Link}from "react-router-dom"

import './Solicitudes.css';


const Solicitudes = ()=> {
  return (
    <body>
      <form>
        <section class="jumbotron">
          <div class="container">
            <hi class="titulo-blog">Nombre de la app // Logo</hi>
          </div>
        </section>
        <section class="main container"></section>

        <h1 align="center"> Solicitudes de personal </h1>

        <span>Ver solicitudes de tipo</span>

        <select  name="select" id="select" class="bordes">
          <option>Vendedor</option>
          <option>Personal</option>
          <option>Delivery</option>
        </select>

        <br>
        </br>
        <br>
        </br>
        <fieldset class="bordes">

             <pre>      <font size="4"> Usuarios                                                Opciones  </font> </pre>

        <span>Pepe Martinez</span>

        <a href="#" class="button white radius">Aceptar</a>
        <a href="#" class="button red radius">Rechazar</a>
        <a href="#" class="button blue radius">Ver Usuario</a>
        </fieldset>
      </form>

      
      <script src="js/bootstrap.min.js"></script>
    </body>
    
  );
}


export default Solicitudes;
