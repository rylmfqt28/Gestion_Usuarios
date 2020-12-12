import React, { Component } from 'react';
import NavMenu from '../menuAdmin/NavMenu';
import NavMenuUser from '../menuAdmin/NavMenuUser';
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

        function showMenu(props){
            if(sessionStorage.getItem("nombreTipo")==='Administrador'){
                return <NavMenu />  
            }
            else{
                return <NavMenuUser/>
            }
        }
        
        return (
            <div>
                
                {showMenu()}
                <br />
                <div className='bienvenida'>
                    <h1><b>Usuario: {sessionStorage.getItem("nombreTipo")}</b></h1>
                    <h2>Bienvenido: {Usuarios.nombre} {Usuarios.apellido}</h2>
                    
                </div>

            </div>

        )
    };

}
export default Home; 