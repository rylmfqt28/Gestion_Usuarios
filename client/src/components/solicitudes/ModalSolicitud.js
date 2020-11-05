import React,{Component} from 'react'

class ModalSolicitud extends Component{
    constructor(props){
        super(props)
        this.state={ 
                CI:'',
                usuarioNombre: '',
                usuarioApellido: '',
                paisID:'',
                ciudadID:'',
                correo:'',
                telefono:'',           
        }
    }
    // componentWillReceiveProps(nextProps) {
    //     this.setState({
    //         CI : nextProps.ci,
    //         usuarioNombre: nextProps.usuarioNombre,
    //         usuarioApellido: nextProps.usuarioApellido,
    //         paisID: nextProps.paisID,
    //         ciudadID: nextProps.ciudadID,
    //         correo: nextProps.correo,
    //         telefono: nextProps.telefono,
    //     });
    // }
     
    render(){
        return(
            <div className="modal fade" id="UserData" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                    <div className="modal-content" id="VentanaEmergente">
                        <div className="modal-header" id ="Encabezado">
                            {/*id="exampleModalLabel"*/}   
                            <h5 className="modal-title">Datos de Usuario</h5>
                            
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body" id="Cuerpo">
                        {
                            //this.state.User.map(
                            //user=>(
                            <div className="row">
                                <div className= "col-sm-6" id="cl">
                                
                                        <ul className="list-group list-group-flush" id = "listaDatos" >
                                            <br></br>
                                            <li className="list-group-item" id="nombre">Nombre: {this.props.usuarioNombre} </li>
                                            <li className="list-group-item" id="apellido">Apellido: {this.props.usuarioApellido}</li>
                                            <li className="list-group-item" id="ci">C.I.: {this.props.ci}</li>
                                            <li className="list-group-item" id="pais">Pais: {this.props.paisID} </li>
                                            <li className="list-group-item" id="ciudad">Ciudad: {this.props.ciudadID}</li>
                                            <li className="list-group-item" id="correo">Correo: {this.props.correo}</li>
                                            <li className="list-group-item" id="telefono">Telefono: {this.props.telefono}</li>
                                            <li className="list-group-item" id="nm">Nombre de Usuario: {this.props.nombreUsuario}</li>
                                            <li className="list-group-item" id="st">Solicitud de tipo: {this.props.tipoUsuario} </li>
                                        </ul>
                                    
                                </div>
                                <div className= "col-sm-6">
                                    <div>
                                        <h5 id="MotivoCabeza">motivo</h5>
                                        <div className="card">
                                            <div className="card-body" id ="MotivoCuerpo">
                                                <p>
                                                    {this.props.motivo}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                    </div>
                </div>
        );
    }
}
export default ModalSolicitud;