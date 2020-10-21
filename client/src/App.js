import React from 'react';
import logo from './logo.svg';
import FormCrearTipoUsuario from './components/crearTipoUsuario';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className="containerPrincipal">
               <div className="containerSecundario">
                    <div className="from-group">
                        <label>
                          <b>
                          Inicio de seción
                        </b>
                            
                        </label>
                        <br/>
                        <br/>

                        <label>
                            Usuario:
                        </label>
                        <br/>
                        <input
                            type="text"
                            className="from-control" 
                            placeholder="Ingrese su usuario"   
                        />
                        <br/>
                        <label>Contraseña: </label>
                        <br/>
                        <input
                            type="password"
                            className="from-control" 
                            placeholder="Ingrese su contraseña"
                        />
                        <br/>
                        <br/>
                        <button className="btn btn-primary">Iniciar sesion</button>    
                        
                    

                    </div>
               </div>
   
           </div>    

  );
}

export default App;
