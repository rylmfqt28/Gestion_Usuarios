import React,{Component} from 'react'
import './modifyAccount.css'
import $ from 'jquery'
import PersonaService from '../../Service/PersonaService';
import ModalCambioContrasena from './ModalCambioContrasena';
import axios from 'axios';

class ModalContrasena extends Component{
    
     constructor(props){
        super(props)
        this.state={ 
            Usuarios: [],
            password: '',
            validate: true,        
        }
        this.contrasenaHandler = this.contrasenaHandler.bind(this)
    }

     verificarPasswd = async () => {
        try {
            if (this.state.password.trim() !== '') {
                const res = await axios.get('/api/accountData/' + sessionStorage.getItem("ci")); //sessionStorage.getItem("ci")
                console.log(res.data);
                if (this.state.password.length < 8) {
                    alert("La contraseña debe contener al menos 8 caracteres.")
                    this.limpiarCampos();
                } else {
                    if(res.data.password === this.setState.password){
                        this.redireccionar();
                        alert("Contraseña correcta!")
                        this.limpiarCampos();
                        console.log(res.data.password)
                    }else{
                        alert("Datos incorrectos")
                        this.limpiarCampos();
                        console.log(res.data.password)
                    }
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
    validarMinPass=(event)=>{
        if(event.target.value.length<8){
          alert("La contraseña debe contener al menos 8 caracteres.")
        }
    
      }
cerrarModal(c){
    $('#ModalContrasena').modal('hide');
    c.stopPropagation();
}
redireccionar(){
    $("#ModalCambioContrasena").modal('show')
}
limpiarCampos() {
    this.setState({
        password: '',
    });

}

componentDidMount() {

    PersonaService.getUser(sessionStorage.getItem("ci")).then(data => this.setState({ Usuarios: data }));
    }

      render(){
        const Usuarios = this.state.Usuarios;
        return(
            
            <div className="modal fade" id="ModalContrasena" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                        <h5 className="form-group">
                            <b>TE DAMOS LA BIENVENIDA</b>
                        </h5>
                        </div>

                        <div>
                        <label>
                            <b>{Usuarios.nombre} {Usuarios.apellido} {Usuarios.password}</b>
                        </label>
                        </div>

                        <div>
                        <label>
                            Debes verificar tu identidad para poder continuar 
                        </label>
                        </div>

                        <div className="form-group">
                            <input
                            type="password"
                            className="form-control"
                            size="30"
                             placeholder="Introduce tu contraseña"
                            name="password"
                            id="password"
                            minLength="8"
                            required
                            value={this.state.password}
                            onChange={(e) => this.contrasenaHandler(e)}
                        />
                        </div>

                        
                        
                        </div>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-outline-info" onClick={this.verificarPasswd}>Siguiente</button>
                        </div>
                    </div>
                    </div>
                    <ModalCambioContrasena/>
                </div>
        );
    }
}
export default ModalContrasena;



