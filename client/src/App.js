import React from 'react';

import{
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Login from './components/login/Login';
import Register from './components/register/Register';
import Solicitudes from './components/solicitudes/Solicitudes';
import crearTipoUsuario from './components/createTypeUser/crearTipoUsuario';


function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/solicitudes" component={Solicitudes}/>
      <Route path="/crearTipoUsuario" component={crearTipoUsuario}/>
      </Switch>
    </Router>
  );
}


export default App;

