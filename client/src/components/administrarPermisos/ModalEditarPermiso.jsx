import React,{Component} from 'react'

class ModalEditarPermiso extends Component{
    constructor(props){
        super(props)
        this.state={ 
                id:"",
                nombre:"titulo",
                descripcion:"descripcion"         
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
                                    <p><input className="form-control text-center" value={this.state.nombre}></input></p>
                                    <textarea className="form-control" id="textoArea" aria-label="With textarea" value={this.state.descripcion}></textarea>
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