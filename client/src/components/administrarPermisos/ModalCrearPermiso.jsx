import React,{Component} from 'react';
import $ from 'jquery';
import axios from 'axios';

class ModalCrearPermiso extends Component{
    constructor(props){
        super(props)
        this.state={ 
                permisoId:this.props.permisoId,
                nombrePermiso:this.props.nombrePermiso,
                permisoDescripcion:this.props.permisoDescripcion,
                validate:true,
        }
      
    }

    
     
    render(){
        return(
            <div className="modal fade" id="newPermiso" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                    <div className="modal-content" >
                        <div className="modal-header" >
                            <h5 className="modal-title">Crear Permisos</h5>
                  
                        </div>
                        <div className="modal-body" id="Cuerpo">
                            <div className="row justify-content-md-center">
                                <div className="col-9">

                                    <p><input className="form-control text-center"
                                      placeholder="Ingresar Nombre del Permiso"
                                     
                                     onChange={(e)=>("")}></input>
                                     </p>

                                    <textarea className="form-control" 
                                    placeholder="Ingresar la descripcion del Permiso"
                                    id="textoArea" 
                                    aria-label="With textarea" 
                                    
                                    onChange={(e)=>("")}>

                                    </textarea>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-center" >
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-secondary" onClick={this.handleSave}>Guardar Cambios</button>
                        </div>
                    </div>
                    </div>
                </div>
        );
    }
}
export default ModalCrearPermiso;