import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import Alerta from '../alert/Alerta'

class ModalCreatePermit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nombrePermiso: '',
            permisoDescripcion: ''
        }
        this.nombreHandler = this.nombreHandler.bind(this)
        this.descripcionHandler = this.descripcionHandler.bind(this)
    }
    nombreHandler(e) {
        if (e.target.value.length < 21) {
            if (e.target.value.match("^[a-zA-Z ]*$") != null) {
                this.setState({ nombrePermiso: e.target.value })
            }

        } else {
            Alerta.AlertaInfo("El máximo de caracteres es de 20")

        }
    }
    descripcionHandler(e) {
        if (e.target.value.length < 251) {
            this.setState({ permisoDescripcion: e.target.value })
        } else {
            Alerta.AlertaInfo("El máximo 250 caracteres")
        }
    }
    clearCampos() {
        this.setState({
            nombrePermiso: '',
            permisoDescripcion: ''
        });

    }
    cancelarPermiso=()=>{
        this.clearCampos();
    }
    createPermisos = async () => {
        try {
            if (this.state.nombrePermiso.trim() !== '') {

                if (this.state.nombrePermiso.length < 4) {
                    Alerta.AlertaInfo("El mínimo 4 caracteres")
                } else {
                    const res = await axios.get('/api/permiso/' + this.state.nombrePermiso.trim());

                    if (res.data === null) {
                        try {
                            const resp = await axios.post("http://localhost:8080/api/nuevoPermiso", {
                                nombrePermiso: this.state.nombrePermiso.trim(),
                                permisoDescripcion: this.state.permisoDescripcion.trim()

                            })
                            swal('CREADO','Se creo el nuevo Permiso con éxito','success');
                            //actualizar las listas
                            this.props.actualizar();
                            this.props.actualizar();
                            //limpiar los campos
                            this.clearCampos();

                        } catch (err) {
                            // Handle Error Here
                            Alerta.AlertaDanger(err)
                        }

                    } else {
                        Alerta.AlertaDanger("Error: El permiso: "+this.state.nombrePermiso.trim()+" ya existe")
                        this.clearCampos();
                    }

                }
            } else {
                Alerta.AlertaInfo('El campo nombre de permiso es obligatorio');
            }
        } catch (error) {
            Alerta.AlertaDanger(error)
        }
    }


    render() {
        return (
            <div className="modal fade" id="CreatePermiso" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content" id="VentanaEmergente">
                        <div className="modal-header" id="Encabezado">
                            {/*id="exampleModalLabel"*/}
                            <h6 className="modal-title">Permisos</h6>

                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body" id="Cuerpo">
                            {
                                //this.state.User.map(
                                //user=>(
                                <div className="row justify-content-md-center">
                                    <div className="col-9">
                                        <h2>Crear Permisos</h2>
                                        <br />
                                        <div>
                                            <input className='form-control' placeholder='Ingresar nombre de permiso' value={this.state.nombrePermiso} onChange={(e) => this.nombreHandler(e)}>
                                            </input>
                                            <br />
                                            <textarea className='form-control' placeholder='Ingresar la descripción de permiso' value={this.state.permisoDescripcion} onChange={(e) => this.descripcionHandler(e)} rows="5">

                                            </textarea>
                                        </div>
                                    </div>
                                </div>

                            }
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={this.cancelarPermiso}>Cancelar</button>
                            <button type="button" className="btn btn-outline-info" data-dismiss="modal" onClick={this.createPermisos}>Crear</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ModalCreatePermit;