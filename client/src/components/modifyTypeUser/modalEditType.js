import React, { Component } from 'react';
import axios from 'axios';

class ModalEditType extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tipoUsuarioID: this.props.tipoUsuarioID,
            crearTipo: this.props.crearTipo,
            descripcionTipo: this.props.descripcionTipo,
            validate: true,
        }
        this.handleSave = this.handleSave.bind(this)
        this.nombreHandler = this.nombreHandler.bind(this)
        this.descripcionHandler = this.descripcionHandler.bind(this)


    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            crearTipo: nextProps.crearTipo,
            descripcionTipo: nextProps.descripcionTipo,
        });
    }

    nombreHandler(e){
        if(e.target.value[0]!==" "){
            if(e.target.value.length !== 21){
                if(e.target.value.match("^[Ññíóáéú a-zA-Z ]*$")!=null){
                    this.setState({crearTipo: e.target.value})
                    this.setState({validate: true})
                    console.log(true)
                }else{
                    this.setState({validate: false})
                    console.log(false)
                }
            }else{
                alert("El maximo de caracteres es de 20")
            }
        }else{
            alert("El nombre debe empezar con un caracter")
        }
    }
    descripcionHandler(e) {
        if (e.target.value.length !== 251) {
            this.setState({ descripcionTipo: e.target.value })
        } else {
            alert("maximo 250 caracteres")
        }
    }

    handleSave(){
        if(this.state.validate && this.state.crearTipo!==""){
            if(this.state.crearTipo.length>=4){
              //  this.saveChanges();
                
                this.props.saveDetails();
                
            }else{
                alert("el nombre debe contener un minimo de 4 caracteres")
            } 
        }else{
            alert("el campo nombre no debe estar vacio")
        }
    }

    


    render() {
        return (
            <div className="modal fade" id="modalEditType" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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