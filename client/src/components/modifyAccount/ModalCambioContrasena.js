import React,{Component} from 'react'
import './modifyAccount.css'
import $ from 'jquery'
import axios from 'axios';
import PersonaService from '../../Service/PersonaService';
//❌✔️⚠️
class ModalCambioContrasena extends Component{
    
     constructor(props){
        super(props)
        this.state={ 
            password: '',
            confPassword: '',           
        }
        this.contrasenaHandler = this.contrasenaHandler.bind(this)
        this.confContrasenaHandler = this.confContrasenaHandler.bind(this)
    }
    
    verificarCampos = async () => {
        try {
            if (this.state.password.trim() !== '' && this.state.confPassword.trim() !=='') {

                if (this.state.password.length < 8 || this.state.confPassword.length < 8) {
                    alert("Las contraseñas deben contener al menos 8 caracteres.")
                    this.limpiarCampos();
                } else {
                    if(this.state.password !== this.state.confPassword){
                    alert("Las contraseñas no coinciden")
                    this.limpiarCampos();
                    }else{
                        alert("Se cambio la contraseña exitosamente")
                        await axios.put('/api/updatePassword/' , {CI:sessionStorage.getItem("ci"), password:this.state.password});
                        this.cerrarModalCambio();
                        this.cerrarModal();
                        this.limpiarCampos();
                    }
                }
            }else{
                alert('Existen campos vacios, intente nuevamente');
            }
        } catch (error) {
            console.log(error);
        }
    }
    contrasenaHandler(e) {
        if (e.target.value.length < 50) {
            if(e.target.value.match("^[Ññíóáéú A-Za-z0-9 ]*$")!=null){
                this.setState({ password: e.target.value })
                this.setState({validate: true})
            }else{
                this.setState({validate: false})
            }
        } else {
            alert("La contraseña debe contener al menos 8 caracteres.")
        }
    }

    confContrasenaHandler(e) {
        if (e.target.value.length < 50) {
            if(e.target.value.match("^[Ññíóáéú A-Za-z0-9 ]*$")!=null){
                this.setState({ confPassword: e.target.value })
                this.setState({validate: true})
            }else{
                this.setState({validate: false})
            }
        } else {
            alert("El campo confirmar contraseña debe contener al menos 8 caracteres.")
        }
    }
    
    limpiarCampos() {
        this.setState({
            password: '',
            confPassword: '',
        });
    
    }
    cerrarModalCambio(){
        $('#ModalCambioContrasena').modal('hide');
    }
    cerrarModal(){
        $('#ModalContrasena').modal('hide');
    }

componentDidMount() {

    PersonaService.getUser(sessionStorage.getItem("ci")).then(data => this.setState({ Usuarios: data }));
  }

      render(){
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
                            id="passwordModalCambio"
                            minLength="8"
                            required
                            value={this.state.password}
                            onChange={(e) => this.contrasenaHandler(e)}
                            
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
                            onChange={(e) => this.confContrasenaHandler(e)}
                            value={this.state.confPassword}
                            required
                        /></div>
                        
                        </div>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-outline-info" onClick={this.verificarCampos}>Cambiar contraseña</button>
                        </div>
                    </div>
                    </div>
                </div>
        );
    }
}
export default ModalCambioContrasena;



