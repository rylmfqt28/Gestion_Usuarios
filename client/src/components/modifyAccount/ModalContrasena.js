import React,{Component} from 'react'
import './modifyAccount.css'
import $ from 'jquery'
import PersonaService from '../../Service/PersonaService';
import ModalCambioContrasena from './ModalCambioContrasena';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

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
                const res = await axios.get('/api/accountData/' + sessionStorage.getItem("ci")); 
                    if(res.data[0].password === this.state.password){
                        this.redireccionar();
                        //alert("Contraseña correcta!")
                        toast.success('🦄 Contraseña correcta!');
                        this.limpiarCampos();
                    }else{
                        //alert("La contraseña ingresada no es correcta")
                        toast.info('🦄 La contraseña ingresada no es correcta!');
                        this.limpiarCampos();
                    }
            }else{
                toast.error('🦄 El campo contraseña es obligatorio');
                //alert('El campo contraseña es obligatorio');
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
            toast('🦄 La contraseña debe contener al menos 8 caracteres.');
            //alert("La contraseña debe contener al menos 8 caracteres.")
        }
    }
    validarMinPass=(event)=>{
        if(event.target.value.length<8){
          alert("La contraseña debe contener al menos 8 caracteres.")
        }
    
      }
cerrarModal(){
    $('#ModalContrasena').modal('hide');
}
redireccionar(){
    $("#ModalCambioContrasena").modal('show')
}
limpiarCampos() {
    this.setState({
        password: '',
    });

}
estiloToast(){
    
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
                            <b>{Usuarios.nombre} {Usuarios.apellido}</b>
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
                            id="passwordModal"
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
                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                        </div>
                    </div>
                    </div>
                    <ModalCambioContrasena/>
                </div>
        );
    }
}
export default ModalContrasena;



