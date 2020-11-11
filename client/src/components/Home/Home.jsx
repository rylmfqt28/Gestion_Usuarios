import React, { Component } from 'react';
import NavMenu from '../menuAdmin/NavMenu'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            CI: '',

        }
    }
    render() {
        return (
            <div>
                <NavMenu />
                <br />
                <div className='bienvenida'>
                    <h2>Usuario Administrador</h2>
                    <h3>Bienvenido: Admin?{sessionStorage.getItem("ci")}</h3>
                </div>

            </div>

        )
    };

}
export default Home; 