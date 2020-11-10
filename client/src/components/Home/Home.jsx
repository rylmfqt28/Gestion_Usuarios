import React, { Component } from 'react';
import NavMenu from '../menuAdmin/NavMenu'

class Home extends Component {
    render() {
        return (
            <div>
                <NavMenu />
                <br />
                <div>
                    <h2>Usuario Administrador</h2>
                    <h3>Bienvenido: Admin?</h3>
                </div>

            </div>

        )
    };

}
export default Home; 