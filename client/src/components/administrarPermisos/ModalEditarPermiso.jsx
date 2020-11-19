import React,{Component} from 'react';
import $ from 'jquery';
import axios from 'axios';
import AdminPermisosService from '../../Service/AdminPermisosService';
class ModalEditarPermiso extends Component{
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
        if(e.target.value.length !== 21){ 
            if(e.target.value.match("^[a-zA-Z ]*$")!=null){
                this.setState({nombrePermiso: e.target.value})
            }
        }else{
            alert("El maximo de caracteres es de 20")
        }
    }
    descripcionHandler(e){
        if(e.target.value.length !== 251){
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
    guardarCambios = async ()=>{
        try {
            if (this.state.nombrePermiso.trim() !== '') {
              const res = await axios.get('/api/permiso/' + this.state.userName.trim());
        
              //console.log(res.data);
              if (res.data === null) {
                //console.log(this.state.paisID)
                try {
                  const resp = await axios.put("http://localhost:8080/api/actualizarPermiso", {
                    nombrePermiso: this.state.nombrePermiso,
                    permisoDescripcion: this.state.permisoDescripcion
                    
                  })
                  console.log(resp);
                  alert('Se guardaron los cambios');
                 
                } catch (err) {
                  // Handle Error Here
                  console.error(err);
                }
        
              } 
            } else {
              //mensaje campos vacios "Existen campos vacios"
              alert('No se guardaron los cambios');
              //console.log("");
            }
          } catch (error) {
            console.log(error);
          }

    }
    /*put(permisoID){
        AdminPermisosService.updatePermiso(this.state.tipoId, permisoId);
       
    }*/
    verificarCambio(){
        if (this.state.validate !== false){
            $(function(){
              $("#TipoUserData").modal('show')
              this.guardarCambios()
            })
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
                                    <p><input className="form-control text-center" value={this.state.nombrePermiso} onChange={(e)=>this.nombreHandler(e)}></input></p>
                                    <textarea className="form-control" id="textoArea" aria-label="With textarea" value={this.state.permisoDescripcion} onChange={(e)=>this.descripcionHandler(e)}></textarea>
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
export default ModalEditarPermiso;