import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery'
import Alerta from '../alert/Alerta'

class ModalEditType extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tipoUsuarioID: this.props.tipoUsuarioID,
            crearTipo: this.props.crearTipo,
            descripcionTipo: this.props.descripcionTipo,
            userTypeNameOld: this.props.crearTipo,
            validate: true,
        }
        this.handleSave = this.handleSave.bind(this)
        this.nombreHandler = this.nombreHandler.bind(this)
        this.descripcionHandler = this.descripcionHandler.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            tipoUsuarioID: nextProps.tipoUsuarioID,
            crearTipo: nextProps.crearTipo,
            descripcionTipo: nextProps.descripcionTipo,
            userTypeNameOld: nextProps.crearTipo
        });
    }

    nombreHandler(e){
        if(e.target.value[0]!==" "){
            if(e.target.value.length !== 21){
                if(e.target.value.match("^[Ññíóáéú a-zA-Z ]*$")!=null){
                    this.setState({crearTipo: e.target.value})
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
            this.setState({ descripcionTipo: e.target.value })
        } else {
            Alerta.AlertaInfo("maximo 250 caracteres")
        }
    }

    handleSave(){
        if(this.state.validate && this.state.crearTipo!==""){
            if(this.state.crearTipo.length>=4){
                this.saveChanges();                
                $("#modalEditType").modal("hide");
                this.props.updateListUserTypes();
                this.props.updateListUserTypes();
                this.props.updateListUserTypes();
                
            }else{
                Alerta.AlertaInfo("el campo nombre de tipo usuario debe contener un minimo de 4 caracteres")
            } 
        }else{
            Alerta.AlertaInfo("el campo nombre de tipo usuario no debe estar vacio")
        }
    }
    saveChanges = async () => {

        try {
            if (this.state.crearTipo.trim() !== '' && this.state.descripcionTipo.trim() !== '') {
                const res = await axios.get('/api/type/' + this.state.crearTipo.trim());
                if (res.data === null || this.state.userTypeNameOld === this.state.crearTipo.trim()) {
                   //Aqui Api para guardar datos
                   const valorActualizar = {tipoUsuarioID:this.state.tipoUsuarioID,crearTipo:this.state.crearTipo,descripcionTipo:this.state.descripcionTipo}
                   await axios.put("/api/updateTypeUser",valorActualizar)
                   Alerta.AlertaSuccess("Se edito el tipo de usuario Exitosamente");
                   ;
                } else {
                    Alerta.AlertaDanger("El tipo de usuario ya existe");
                }
            } else {

                Alerta.AlertaInfo("Existen campos vacíos, rellenar los campos restantes");
            }

        } catch (error) {
            console.log(error);
        }
        
    }

    render() {
        return (
            <div className="modal fade" id="modalEditType" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content" id="ModalEditPermiso">
                        <div className="modal-header" id="EncabezadoEditPermiso">
                            <h5 className="modal-title">Editar Tipo de Usuario</h5>

                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body" id="Cuerpo">
                            <div className="row justify-content-md-center">
                                <div className="col-9">
                                    <p><input className="form-control text-center" value={this.state.crearTipo} onChange={(e) => this.nombreHandler(e)}></input></p>
                                    <textarea className="form-control" id="textoArea" aria-label="With textarea" value={this.state.descripcionTipo} onChange={(e) => this.descripcionHandler(e)}></textarea>
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
export default ModalEditType;