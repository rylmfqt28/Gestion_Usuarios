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
import PublicRoute from './routes/PublicRoute';

import administrarPermisos from './components/administrarPermisos/administrarPermisos'

import Home from './components/Home/Home';
import AdministrarCuenta from './components/register/AdministrarCuenta';
import ModificarTipoUser from './components/modifyTypeUser/ModificarTipoUser';
import ModifyAccount from './components/modifyAccount/ModifyAccount';
//import Pagina from './components/register/PageAuxiliar';
import ListUsuario from './components/ListaUsuarios/ListUsuarios'

import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'


class App extends Component{

  constructor(props) {
    super(props);
    this.state = { value: ""};
  }

  render(){
    return (
      <Router>
        <ReactNotification />
        <Switch>
        <PublicRoute exact path="/" component={Login}/>
        <PrivateRoute path="/solicitudes" component={Solicitudes}/>
        <PrivateRoute path="/crearTipoUsuario" component={crearTipoUsuario}/>
        <PrivateRoute path="/home" component={Home}/>
        <PublicRoute path="/createAccount" component={newAccount}/>
        <PrivateRoute path="/administrar" component={AdministrarCuenta}/>
        <PrivateRoute path="/modifyTypeUser" component={ModificarTipoUser}/>
        <PrivateRoute path="/administrarPermisos" component={administrarPermisos}/>
        <PrivateRoute path="/modifyAccount" component={ModifyAccount} />
        <PrivateRoute path="/listUsuarios" component={ListUsuario} />
        </Switch>
      </Router>
    );
  }
}


export default App;

