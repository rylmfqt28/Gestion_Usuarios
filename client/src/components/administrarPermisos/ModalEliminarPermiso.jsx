import React,{Component} from 'react'
import $ from 'jquery'
import PermisosController from '../../Service/PermisosController';



class ModalEliminarPermiso extends Component{
    constructor(props){
        super(props)
        this.state={ 
                permisoId:this.props.permisoId,
                nombrePermiso:this.props.nombrePermiso,
                validate:true,
        }
        this.handleSave=this.handleSave.bind(this)
    }
    handleSave(){
        if(this.state.validate){

          this.remove(this.props.permisoId);
        
            $(function(){
               
                $("#erasePermiso").modal('hide')

            })
        }else{
            alert("incorrecto")
           

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
                    <div className="modal-content" id="ModalErasePermiso">
                        <div className="modal-header" id ="EncabezadoErasePermiso">
                            <h5 className="modal-title">Eliminar Permiso</h5>
                        </div>
                        <div className="modal-body" id="Cuerpo">
                           <h7>Decea eliminar el permiso: "{this.props.nombrePermiso}" ?</h7>
                        </div>
                        <div className="modal-footer justify-content-center" >
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-secondary"  onClick={this.handleSave}>Aceptar</button>
                        </div>
                    </div>
                    </div>
                </div>
        );
    }
}
export default ModalEliminarPermiso;