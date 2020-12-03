import React,{Component} from 'react'
import './modifyAccount.css'
import $ from 'jquery'
import PersonaService from '../../Service/PersonaService';

class ModalCambioContrasena extends Component{
    
     constructor(props){
        super(props)
        this.state={ 
            Usuarios: [],
            password: '',
            confPassword: '',           
        }
        this.contrasenaHandler = this.contrasenaHandler.bind(this)
    }
    
    verificarPasswd = async () => {
        try {
            if (this.state.password.trim() !== '') {

                if (this.state.password.length < 8) {
                    alert("La contraseña debe contener al menos 8 caracteres.")
                } else {
                    //const res = await axios.get('/api/permiso/' + this.state.password.trim());

                    //console.log(res.data);
                }
            }else{
                alert('El campo contraseña es obligatorio');
            }
        } catch (error) {
            console.log(error);
        }
    }
    contrasenaHandler(e) {
        if (e.target.value.length < 50) {
            this.setState({ password: e.target.value })
        } else {
            alert("El campo contraseña debe contener al menos 8 caracteres.")
        }
    }

    confContrasenaHandler(e) {
        if (e.target.value.length < 50) {
            this.setState({ confPassword: e.target.value })
        } else {
            alert("El campo confirmar contraseña debe contener al menos 8 caracteres.")
        }
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
                            onChange={(e) => this.contrasenaHandler(e)}
                            value={this.state.confPassword}
                            required
                        /></div>
                        
                        </div>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-secondary" onClick={this.verificarPasswd}>Cambiar la contraseña</button>
                        </div>
                    </div>
                    </div>
                </div>
        );
    }
}
export default ModalCambioContrasena;



