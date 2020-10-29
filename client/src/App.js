import React from 'react';

import{
  BrowserRouter as Router,
  Switch,
  Route,
 

} from "react-router-dom"
import Login from './components/login/Login';
import Register from './components/register/Register';
import Request from './components/request/Request';
import crearTipoUsuario from './components/createTypeUser/crearTipoUsuario';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/register" component={Register}/>

      <Route path="/request" component={Request}/>

      <Route path="/crearTipoUsuario" component={crearTipoUsuario}/>

      </Switch>
    </Router>
  );
}


export default App;

