import React, { Component } from 'react';
import NavMenu from '../menuAdmin/NavMenu';
import PersonaService from '../../Service/PersonaService';
import './Home.css';

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Usuarios: []

        }
        
    }
    componentDidMount() {

    PersonaService.getUser(sessionStorage.getItem("ci")).then(data => this.setState({ Usuarios: data }));
    
    }
    render() {
        const Usuarios = this.state.Usuarios;
        return (
            <div>
                
                <NavMenu />
                <br />
                <div className='bienvenida'>
                    <h1><b>Usuario: Administrador</b></h1>
                    <h2>Bienvenido: {Usuarios.nombre} {Usuarios.apellido}</h2>
                </div>

            </div>

        )
    };

}
export default Home; 