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
        //this.updateList = this.updateList.bind(this)
    }
    componentDidMount() {
        //console.log(sessionStorage.getItem("ci"));
        //console.log(ciAdmin);
    //PersonaService.getUser(ciAdmin).then(data => this.setState({ Usuarios: data }));
    //console.log(this.state.user.nombre);
    }
    render() {
        return (
            <div>
                <NavMenu />
                <br />
                <div className='bienvenida'>
                    <h2>Usuario Administrador</h2>
                    <h3>Bienvenido: {} {}</h3>
                </div>

            </div>

        )
    };

}
export default Home; 