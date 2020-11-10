import React, { Component } from 'react';

import{
  BrowserRouter as Router,
  Switch,

} from "react-router-dom"
import Login from './components/login/Login';
import Solicitudes from './components/solicitudes/Solicitudes';
import crearTipoUsuario from './components/createTypeUser/crearTipoUsuario';
import newAccount from './components/createAccount/newAccount';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute'

class App extends Component{

  constructor(props) {
    super(props);
    this.state = { value: ""};
  }

  render(){
    return (
      <Router>
        <Switch>
        <PublicRoute exact path="/" component={Login}/>
        <PrivateRoute path="/solicitudes" component={Solicitudes}/>
        <PrivateRoute path="/crearTipoUsuario" component={crearTipoUsuario}/>
        <PublicRoute path="/createAccount" component={newAccount}/>
        </Switch>
      </Router>
    );
  }
}


export default App;

