import React,{Component} from 'react'
import './newAccount.css'
import swal from 'sweetalert'


class ModalSolicitudC extends Component{
    
     constructor(props){
        super(props)
        this.state={ 
            crearTipo: '',
            descripcionTipo: '',        
        }
    }


     
    valueToState = ({ name, value}) => {
    this.setState(() => {
    return { [name]: value };
        });
     };

      render(){
        return(
            
            <div className="modal fade" id="TipoUserData" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                    <div className="modal-content" id="VentanaEmergente">
                        <div className="modal-header" id ="Encabezado">
                        <h5 className="modal-title">SOLICITAR CUENTA DE TIPO: {this.props.crearTipo}</h5>  
                    
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body" id="Cuerpo">
                          <textarea 
                              className="form-control"
                              rows="8"
                              placeholder="Ingrese el motivo de su Solicitud"
                              name="descripcionTipo"
                              type="text"
                              onChange={event => this.valueToState(event.target)} 
                          />
                       
                        </div>

                        <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-secondary" onClick={()=>mostrarAlerta(this.state.descripcionTipo)}>Enviar</button>
                        </div>
                    </div>
                    </div>
                </div>
        );
    }
}
export default ModalSolicitudC;

const mostrarAlerta=(date)=>
{  if(date.length <=20){
    swal("ERROR!", "Debe ingresar un motivo de solicitud valido", "error");
    
} else{
    swal("ACEPTADO!", "Solicitud enviada con éxito, espere a que el administrador apruebe su solicitud", "success");
}
}