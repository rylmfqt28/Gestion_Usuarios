import React,{Component} from 'react'

class ModalEditarPermiso extends Component{
    constructor(props){
        super(props)
        this.state={ 
                permisoId:this.props.permisoId,
                nombrePermiso:this.props.nombrePermiso,
                permisoDescripcion:this.props.permisoDescripcion         
        }
        this.handleSave=this.handleSave.bind(this)
        this.nombreHandler=this.nombreHandler.bind(this)
        this.handleDeleteKeyName=this.handleDeleteKeyName.bind(this) 
        this.descripcionHandler=this.descripcionHandler.bind(this)
        this.handleDeleteKeyDesc=this.handleDeleteKeyDesc.bind(this)
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            nombrePermiso: nextProps.nombrePermiso,
            permisoDescripcion: nextProps.permisoDescripcion,
        });
    }

    handleDeleteKeyName(e){
        let key = e.keyCode || e.which;
        console.log(key)
        if (this.state.nombrePermiso.length !== 0 && (key === 8 || key === 127)) {
            let nuevo = this.state.nombrePermiso.substring(0, this.state.nombrePermiso.length - 1);
            console.log(nuevo)
            this.setState({nombrePermiso: nuevo})
        }
    }

    nombreHandler(e){
        console.log(e.target.value)
        if(this.state.nombrePermiso.length != 20){ 
            if(e.target.value.match("^[a-zA-Z ]*$")!=null){
                this.setState({nombrePermiso: e.target.value})
            }
        }else{
            alert("El maximo de caracteres es de 20")
        }
    }
    handleDeleteKeyDesc(e){
        let key = e.keyCode || e.which;
        console.log(key)
        if (this.state.permisoDescripcion.length !== 0 && (key === 8 || key === 127)) {
            let nuevo = this.state.permisoDescripcion.substring(0, this.state.permisoDescripcion.length - 1);
            console.log(nuevo)
            this.setState({permisoDescripcion: nuevo})
        }
    }
    descripcionHandler(e){
        if(this.state.permisoDescripcion.length != 250){
            this.setState({permisoDescripcion: e.target.value})
        }else{
            alert("maximo 250 caracteres")
        }
    }

    handleSave(){
        if(this.state.validate){
            const Permiso = this.state;
            console.log(this.state.validate)
            this.props.saveDetails(Permiso);
        }
    }
     
    render(){
        return(
            <div className="modal fade" id="editPermiso" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                    <div className="modal-content" id="ModalEditPermiso">
                        <div className="modal-header" id ="EncabezadoEditPermiso">
                            <h5 className="modal-title">Editar Permiso</h5>
                            
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body" id="Cuerpo">
                            <div className="row justify-content-md-center">
                                <div className="col-9">
                                    <p><input className="form-control text-center" value={this.state.nombrePermiso} onKeyDownCapture={(e)=>this.handleDeleteKeyName(e)} onChange={(e)=>this.nombreHandler(e)}></input></p>
                                    <textarea className="form-control" id="textoArea" aria-label="With textarea" value={this.state.permisoDescripcion} onKeyDownCapture={(e)=>this.handleDeleteKeyDesc(e)} onChange={(e)=>this.descripcionHandler(e)}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-center" >
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-secondary">Guardar Cambios</button>
                        </div>
                    </div>
                    </div>
                </div>
        );
    }
}
export default ModalEditarPermiso;