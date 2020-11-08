import React, { Component } from 'react';

import{
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom"
import Login from './components/login/Login';
import Register from './components/register/Register';
import Solicitudes from './components/solicitudes/Solicitudes';
import crearTipoUsuario from './components/createTypeUser/crearTipoUsuario';
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
        <PublicRoute path="/register" component={Register}/>
        <Route path="/request" component={Request}/>
        <PrivateRoute path="/solicitudes" component={Solicitudes}/>
        <PrivateRoute path="/crearTipoUsuario" component={crearTipoUsuario}/>
  
        </Switch>
      </Router>
    );
  }
}


export default App;

