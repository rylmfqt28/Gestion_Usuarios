import React, { Component } from 'react';

class ModalInformacion extends Component{
    constructor(props){
        super(props);
     this.state = {
        tipoUsuario : [],
        usuarios : [],
        detalleUsuario : []
     }
    }

    render(){
        const userName = this.props.detalleUsuario.usuarioNombre;
        const userLastname = this.props.detalleUsuario.usuarioApellido;
        const userType = this.props.detalleUsuario.tipoUsuarioNombre;
        const address = this.props.detalleUsuario.direccion;
        const country = this.props.detalleUsuario.paisID;
        const city = this.props.detalleUsuario.ciudadNombre;
        const email = this.props.detalleUsuario.correo;
        const phone = this.props.detalleUsuario.telefono;
        const ci = this.props.detalleUsuario.ci;
        return(
            <div className="modal fade" id="informacion" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header" id="Encabezado">
        <h5 className="modal-title">Información del Usuario<b> {userName} {userLastname}</b></h5>  
                             <div>
                        </div>            
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body" id="Cuerpo">
                        <p><strong>CI:</strong> {ci}</p>
                        <p><strong>Nombres:</strong> {userName}</p>
                        <p><strong>Apellidos:</strong> {userLastname}</p>
                        <p><strong>Tipo de Usuario:</strong> {userType}</p>
                        <p><strong>Pa&iacute;s:</strong> {country}</p>
                        <p><strong>Ciudad:</strong> {city}</p>
                        <p><strong>Direcci&oacute;n:</strong> {address}</p>
                        <p><strong>E-mail:</strong> {email}</p>
                        <p><strong>Tel&eacute;fono:</strong> {phone}</p>
                        </div>
                        <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalInformacion