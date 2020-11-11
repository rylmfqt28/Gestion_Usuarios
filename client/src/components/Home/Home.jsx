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
    PersonaService.getTiposUser(tipoUsuario).then(data => this.setState({ Usuarios: data }));
    }
    render() {
        return (
            <div>
                <NavMenu />
                <br />
                <div className='bienvenida'>
                    <h2>Usuario Administrador</h2>
                    <h3>Bienvenido:{sessionStorage.getItem("ci")}</h3>
                </div>

            </div>

        )
    };

}
export default Home; 