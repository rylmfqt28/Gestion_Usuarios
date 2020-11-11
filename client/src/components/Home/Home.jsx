import React, { Component } from 'react';
import NavMenu from '../menuAdmin/NavMenu';
import PersonaService from '../../Service/PersonaService';

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Usuarios: [],
            user: {},

        }
        
    }
    componentDidMount() {

    PersonaService.getUser(sessionStorage.getItem("ci")).then(data => this.setState({ Usuarios: data }));
    
    console.log(this.state.Usuarios.nombre);
    }
    render() {
        const Usuarios = this.state.Usuarios;
        return (
            <div>
                <NavMenu />
                <br />
                <div className='bienvenida'>
                    <h2>Usuario Administrador</h2>
                    <h3>Bienvenido: {Usuarios.nombre} {Usuarios.apellido}</h3>
                </div>

            </div>

        )
    };

}
export default Home; 