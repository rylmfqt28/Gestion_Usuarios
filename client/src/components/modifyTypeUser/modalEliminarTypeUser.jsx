import React,{Component} from 'react'
import $ from 'jquery'
import TypeUser from '../../Service/tyUserService'


class ModalEliminarPermiso extends Component{
    constructor(props){
        super(props)
        this.state={ 
                tipoUsuarioID:this.props.tipoUsuarioID,
                crearTipo:this.props.crearTipo,
                validate:true,
        }
        this.handleErase=this.handleErase.bind(this)
    }
    handleErase(){
        if(this.state.validate){

          this.remove(this.props.tipoUsuarioID);
     
            $(function(){ 
                $("#erasePermisoTypeUse").modal('hide')  
                alert("Se elimino el tipo de Usuario!")
               
            })
        }else{
            alert("incorrecto")
        }
       
    }
    remove(tipoUsuarioID){
        
        TypeUser.deletePermisoTypeUser(tipoUsuarioID);   
        this.props.updateListUserTypes();
        this.props.updateListUserTypes();
       
    }
   
    
     
    render(){
        return(
            <div className="modal fade" id="erasePermisoTypeUser" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                    <div className="modal-content" id="ModalEditPermiso">
                        <div className="modal-header" id="EncabezadoEditPermiso">
                            <h5 className="modal-title">Eliminar Tipo Usuario</h5>
                        </div>
                        <div className="modal-body" id="Cuerpo">
                           <h7>Decea eliminar el Usuario: "{this.props.crearTipo}" ?</h7>
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




