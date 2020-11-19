import React, { Component } from 'react';
import axios from 'axios';


class ModalCreatePermit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            permiso: '',
            permisoDescripcion: ''
        }
        this.nombreHandler = this.nombreHandler.bind(this)
        this.descripcionHandler = this.descripcionHandler.bind(this)
    }
    nombreHandler(e) {
        if (e.target.value.length === 20) {
            alert("El maximo de caracteres es de 20")
        } else {

            if (e.target.value.match("^[a-zA-Z ]*$") != null) {
                this.setState({ nombrePermiso: e.target.value })
            }
        }
    }
    descripcionHandler(e) {
        if (e.target.value.length !== 250) {
            this.setState({ permisoDescripcion: e.target.value })
        } else {
            alert("maximo 250 caracteres")
        }
    }
    createPermisos = async () => {
        try {
            if (this.state.nombrePermiso.trim() !== '') {

                if (this.state.nombrePermiso.length < 4) { 
                    alert("minimo 4 caracteres")
                } else {
                    const res = await axios.get('/api/permiso/' + this.state.nombrePermiso.trim());

                    //console.log(res.data);
                    if (res.data === null) {
                        //console.log(this.state.paisID)
                        try {
                            const resp = await axios.post("http://localhost:8080/api/nuevoPermiso", {
                                nombrePermiso: this.state.nombrePermiso,
                                permisoDescripcion: this.state.permisoDescripcion

                            })
                            console.log(resp);
                            alert('Se guardaron los cambios');
                            window.location.reload(); 
                        } catch (err) {
                            // Handle Error Here
                            console.error(err);
                        }

                    }
                }
            } else {
                //mensaje campos vacios "Existen campos vacios"
                alert('El campo nombre de permiso es Obligatorio');
                //console.log("");
            }
        } catch (error) {
            console.log(error);
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
                                <div className="col">
                                    <h2>Crear Permisos</h2>
                                    <br />
                                    <div>
                                        <input className='form-control' placeholder='ingresar nombre de permiso' onChange={(e) => this.nombreHandler(e)}>
                                        </input>
                                        <br />
                                        <textarea className='form-control' placeholder='ingresar la descripción de permiso' onChange={(e) => this.descripcionHandler(e)} rows="5">

                                        </textarea>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-outline-info" data-dismiss="modal" onClick={this.createPermisos}>Crear</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ModalCreatePermit;