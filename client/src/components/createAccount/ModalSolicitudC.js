import React,{Component} from 'react'
import './newAccount.css'
import swal from 'sweetalert'
import $ from 'jquery'

class ModalSolicitudC extends Component{
    
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
        swal("ERROR", "La descripción debe contener 500 caracteres como máximo.", "error");
    }
}

      render(){
        return(
            
            <div className="modal fade" id="TipoUserData" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                    <div className="modal-content" id="VentanaEmergente">
                        <div className="modal-header" id ="Encabezado">
                       
                        <h5 className="modal-title" style={{textTransform: 'uppercase'}}>SOLICITAR CUENTA DE TIPO: {this.props.crearTipo}</h5>  
                    
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body" id="Cuerpo">
                          <textarea 
                              id="campo"
                              className="form-control"
                              rows="8"
                              placeholder="Ingrese el motivo de su Solicitud"
                              name="descripcionTipo"
                              type="text"
                              onChange={event => this.valueToState(event.target)} 
                              onKeyPress={()=>this.mostrarAlertaMaxL(this.state.descripcionTipo)}
                          />
                       
                        </div>

                        <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-secondary" onClick={()=>this.mostrarAlerta(this.state.descripcionTipo)}>Aceptar</button>
                        </div>
                    </div>
                    </div>
                </div>
        );
    }
}
export default ModalSolicitudC;



