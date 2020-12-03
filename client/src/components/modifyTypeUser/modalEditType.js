import React,{Component} from 'react'
import "./ModificarTipoUsuario.css";
import swal from 'sweetalert'
import $ from 'jquery'

class ModalEditType extends Component{
    
     constructor(props){
        super(props)
        this.state={ 
            crearTipo: '',
            descripcionTipo: '',        
        }
        
    }

    
    valueToState = ({ name, value}) => {
    //console.log("El VALOR es: " + value)
    this.setState(() => {
    return { [name]: value };
        });
     };

     mostrarAlerta=(date)=>{
        //console.log("El DATO es: " + date)
        if(date.length === 0){
            swal("ERROR", "La descripción está vacia. Por favor ingrese una descripción válida.", "error");
        }
        else
        {
            if(date.length <20 || date.length > 500){
                swal("ERROR", "La descripción debe contener 20 caracteres como mínimo y 500 como máximo.", "error");
                
            } else{     
                swal("ACEPTADO", "Solicitud enviada con éxito, espere a que el administrador apruebe su solicitud", "success");
                this.props.capturarDatosModal(date)
                this.props.insertarDatoRegistro()
                $(function(){
                    $("#TipoUserData").modal('hide')
                })
            }
        
        }
    }

mostrarAlertaMaxL=(date)=>{
    if(date.length > 499){
        swal("ERROR", "La descripción debe contener 500 caracteres como máximo modalEditType.", "error");
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
export default ModalEditType;



