import React,{Component} from 'react'
import $ from 'jquery'

class ModalEliminarPermiso extends Component{
    constructor(props){
        super(props)
        this.state={ 
                permisoId:this.props.permisoId,
                nombrePermiso:this.props.nombrePermiso,
                permisoDescripcion:this.props.permisoDescripcion,
                validate:true,
        }
        this.handleSave=this.handleSave.bind(this)
        this.nombreHandler=this.nombreHandler.bind(this)
        this.descripcionHandler=this.descripcionHandler.bind(this)
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            nombrePermiso: nextProps.nombrePermiso,
            permisoDescripcion: nextProps.permisoDescripcion,
        });
    }

    nombreHandler(e){
        if(e.target.value.length != 21){ 
            if(e.target.value.match("^[a-zA-Z ]*$")!=null){
                this.setState({nombrePermiso: e.target.value})
            }
        }else{
            alert("El maximo de caracteres es de 20")
        }
    }
    descripcionHandler(e){
        if(e.target.value.length != 251){
            this.setState({permisoDescripcion: e.target.value})
        }else{
            alert("maximo 250 caracteres")
        }
    }

    handleSave(){
        if(this.state.validate){
            this.props.saveDetails();
            $(function(){
                $("#editPermiso").modal('hide')
            })
        }else{
            alert("incorrecto")
        }
    }
     
    render(){
        return(
            <div className="modal fade" id="erasePermiso" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                    <div className="modal-content" id="ModalErasePermiso">
                        <div className="modal-header" id ="EncabezadoErasePermiso">
                            <h5 className="modal-title">Eliminar Permiso</h5>
                            
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body" id="Cuerpo">

                        
                           <h6>Decea eliminar el permisos: "{this.props.nombrePermiso}" ?</h6>

                        </div>
                        <div className="modal-footer justify-content-center" >
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-secondary" onClick={this.handleSave}>Aceptar</button>
                        </div>
                    </div>
                    </div>
                </div>
        );
    }
}
export default ModalEliminarPermiso;