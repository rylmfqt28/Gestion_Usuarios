import React from 'react';
import logo from './logo.svg';
import FormCrearTipoUsuario from './components/crearTipoUsuario';


import './App.css';

function App() {
  return (
    <div className="containerPrincipal">
               <div className="containerSecundario">
                    <div className="from-group">
                        <label>
                            Usuario:
                        </label>
                        <br/>
                        <input
                            type="text"
                            className="from-control"    
                        />
                        <br/>
                        <label>Contrasena: </label>
                        <br/>
                        <input
                            type="password"
                            className="from-control" 
                        />
                        <br/>
                        <button className="btn btn-primay">Iniciar sesion</button>    
                        
                    

                    </div>
               </div>
   
           </div>    

  );
}

export default App;
