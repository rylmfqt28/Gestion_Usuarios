import React from 'react';
//import logo from './logo.svg';
//import FormCrearTipoUsuario from './components/crearTipoUsuario';
//import 'bootstrap/dist/css/bootstrap.min.css';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link

} from "react-router-dom"
import Login from './components/login/Login';
import Register from './components/register/Register';


function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/register" component={Register}/>
      </Switch>
    </Router>
  );
}


export default App;
