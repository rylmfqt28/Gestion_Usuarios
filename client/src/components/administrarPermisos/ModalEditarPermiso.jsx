import React, { Component } from 'react';
import axios from 'axios';
import Alerta from '../alert/Alerta';

class ModalEditarPermiso extends Component {
    constructor(props) {
        super(props)
        this.state = {
            permisoId: this.props.permisoId,
            nombrePermiso: this.props.nombrePermiso,
            permisoDescripcion: this.props.permisoDescripcion,
            validate: true,
        }
        this.handleSave = this.handleSave.bind(this)
        this.nombreHandler = this.nombreHandler.bind(this)
        this.descripcionHandler = this.descripcionHandler.bind(this)


    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            nombrePermiso: nextProps.nombrePermiso,
            permisoDescripcion: nextProps.permisoDescripcion,
        });
    }

    nombreHandler(e){
        if(e.target.value[0]!==" "){
            if(e.target.value.length !== 21){
                if(e.target.value.match("^[Ññíóáéú a-zA-Z ]*$")!=null){
                    this.setState({nombrePermiso: e.target.value})
                    this.setState({validate: true})
                }else{
                    this.setState({validate: false})
                }
            }else{
                Alerta.AlertaInfo("El maximo de caracteres es de 20")
            }
        }else{
            Alerta.AlertaInfo("El nombre debe empezar con un caracter")
        }
    }
    descripcionHandler(e) {
        if (e.target.value.length !== 251) {
            this.setState({ permisoDescripcion: e.target.value })
        } else {
            Alerta.AlertaInfo("maximo 250 caracteres")
        }
    }

    handleSave(){
        if(this.state.validate && this.state.nombrePermiso!==""){
            if(this.state.nombrePermiso.length>=4){
                this.saveChanges();
                
                this.props.saveDetails();
                
            }else{
                Alerta.AlertaInfo("el nombre debe contener un minimo de 4 caracteres")
            } 
        }else{
            Alerta.AlertaInfo("el campo nombre no debe estar vacio")
        }
    }

    saveChanges = async () => {
        try {
            if (this.state.permisoId !== 0)
                try {
                    const resp = await axios.put("http://localhost:8080/api/actualizarPermiso/" + this.props.permisoId, {
                        nombrePermiso: this.state.nombrePermiso,
                        permisoDescripcion: this.state.permisoDescripcion,

                    })
                    Alerta.AlertaSuccess('Se guardaron los cambios con exito');
                } catch (err) {
                    Alerta.AlertaDanger(err)
                }

        } catch (error) {
            Alerta.AlertaDanger(error)
        }

    }



    render() {
        return (
            <div className="modal fade" id="editPermiso" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content" id="ModalEditPermiso">
                        <div className="modal-header" id="EncabezadoEditPermiso">
                            <h5 className="modal-title">Editar Permiso</h5>

                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body" id="Cuerpo">
                            <div className="row justify-content-md-center">
                                <div className="col-9">
                                    <p><input className="form-control text-center" value={this.state.nombrePermiso} onChange={(e) => this.nombreHandler(e)}></input></p>
                                    <textarea className="form-control" id="textoArea" aria-label="With textarea" value={this.state.permisoDescripcion} onChange={(e) => this.descripcionHandler(e)}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-center" >
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-outline-info" onClick={this.handleSave} >Guardar Cambios</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ModalEditarPermiso;