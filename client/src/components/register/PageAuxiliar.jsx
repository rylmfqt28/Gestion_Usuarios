import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//import './Solicitudes.css';
import PersonaService from '../../Service/PersonaService';
import TipoUser from '../../Service/TipoUser';
//import ModalSolicitud from './ModalSolicitud';
//import ModalSolicitud from './ModalSolicitud';
//import { data } from 'jquery';
import NavMenu from '../menuAdmin/NavMenu'
import { Link } from 'react-router-dom';
import ModalCreatePermit from './ModalCreatePermit';


class PageAuxiliar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Permisos: [],
            permiso: {},

        }
    }

    render() {
        return (
            <div>
                <NavMenu />
                <br/>
                <Link 
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#CreatePermiso"
                >Crear Permiso</Link>

                <div>
                <ModalCreatePermit/>
                </div>
           
            </div>
            
        )
    }

}
export default PageAuxiliar;