import React,{Component} from 'react'
import $ from 'jquery'
import PermisosController from '../../Service/PermisosController';
import Alerta from '../alert/Alerta';



class ModalEliminarPermiso extends Component{
    constructor(props){
        super(props)
        this.state={ 
                permisoId:this.props.permisoId,
                nombrePermiso:this.props.nombrePermiso,
                validate:true,
        }
        this.handleErase=this.handleErase.bind(this)
    }
    handleErase(){
        if(this.state.validate){

          this.remove(this.props.permisoId);
         
            $(function(){ 
                $("#erasePermiso").modal('hide')  
                Alerta.AlertaSuccess("Se elimino el permiso!")
            })
        }else{
            Alerta.AlertaDanger("No se pudo eliminar el permiso")
        }
       
    }
    remove(permisoId){
        
        PermisosController.deletePermiso(permisoId);   
        this.props.updateList();
        this.props.updateList();
    }
   
    
     
    render(){
        return(
            <div className="modal fade" id="erasePermiso" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                    <div className="modal-content" id="ModalEditPermiso">
                        <div className="modal-header" id="EncabezadoEditPermiso">
                            <h5 className="modal-title">Eliminar Permiso</h5>
                        </div>
                        <div className="modal-body" id="Cuerpo">
                           <h7>Desea eliminar el permiso: "{this.props.nombrePermiso}" ?</h7>
                        </div>
                        <div className="modal-footer justify-content-center" >
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-outline-info"  onClick={this.handleErase}>Aceptar</button>
                        </div>
                    </div>
                    </div>
                </div>
        );
    }
}
export default ModalEliminarPermiso;




