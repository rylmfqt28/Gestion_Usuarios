import React,{Component} from 'react'
import './modifyAccount.css'
import swal from 'sweetalert'
import $ from 'jquery'
import PersonaService from '../../Service/PersonaService';

class ModalCambioContrasena extends Component{
    
     constructor(props){
        super(props)
        this.state={ 
            crearTipo: '',
            descripcionTipo: '',
            Usuarios: [],        
        }
        
    }
    
    valueToState = ({ name, value}) => {
    this.setState(() => {
    return { [name]: value };
        });
     };

     mostrarAlerta=(date)=>{
        if(date.length === 0){
            swal("ERROR", "La contraseña está vacia. Por favor ingrese una contraseña válida.", "error");
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
    if(date.length < 8){
        swal("ERROR", "La contraseña debe contener al menos 8 caracteres.", "error");
    }
}

cerrarModal(e){
    $('#ModalContrasena').modal('hide');
    e.stopPropagation();
}
componentDidMount() {

    PersonaService.getUser(sessionStorage.getItem("ci")).then(data => this.setState({ Usuarios: data }));
  }

      render(){
        const Usuarios = this.state.Usuarios;
        return(
            
            <div className="modal fade" id="ModalCambioContrasena" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                    <div className="modal-content" id="VentanaEmergente">
                        <div className="modal-header" id ="Encabezado">
                       
                        <h5 className="modal-title" style={{textTransform: 'uppercase'}}>Cambio de contraseña</h5>  
                    
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="col" align="center">
                        <div className="form-register">
                        <div>
                        <label className="form-group">
                            <b></b>
                        </label>
                        </div>

                        <div className="form-group">
                        <b>Contraseña nueva:</b>
                            <input
                            type="password"
                            className="form-control"
                            size="30"
                             placeholder="Introduce tu nueva contraseña"
                            name="password"
                            id="password"
                            minLength="8"
                            required
                            value={this.state.password}
                            
                        />
                        </div>
                        <div className="form-group"><b>Confirma la nueva contraseña:</b>
                         <input
                            type="password"
                            className="form-control"
                            size="60"
                            placeholder="Confirme tu nueva contraseña"
                            name="confPassword"
                            id="confPassword"
                            minLength="8"
                            onKeyDown={this.handleDeleteKeyConfPassword}
                            onChange={event => this.valueToState(event.target)} 
                            onKeyPress={()=>this.mostrarAlertaMaxL(this.state.descripcionTipo)}
                            value={this.state.confPassword}
                            required
                        /></div>
                        
                        </div>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-secondary" onClick={()=>this.mostrarAlerta(this.state.descripcionTipo)}>Cambiar la contraseña</button>
                        </div>
                    </div>
                    </div>
                </div>
        );
    }
}
export default ModalCambioContrasena;



