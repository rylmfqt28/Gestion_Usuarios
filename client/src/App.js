import React from 'react';
//import logo from './logo.svg';
//import FormCrearTipoUsuario from './components/crearTipoUsuario';
//import 'bootstrap/dist/css/bootstrap.min.css';
import{
  BrowserRouter as Router,
  Switch,
  Route,
 

} from "react-router-dom"
import Login from './components/login/Login';
import Register from './components/register/Register';
import Request from './components/request/Request';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/register" component={Register}/>
    <Route path="/request" component={Request}/>
      </Switch>
    </Router>
  );
}


export default App;
