import React,{Component} from 'react';
import $ from 'jquery';
import axios from 'axios';

class ModalCrearPermiso extends Component{
    constructor(props){
        super(props)
        this.state={           
            nombrePermiso:"",
            permisoDescripcion:"",
            validate:true,
    }
    this.handleSave=this.handleSave.bind(this)
    this.nombreHandler=this.nombreHandler.bind(this)
    this.descripcionHandler=this.descripcionHandler.bind(this)
}

nombreHandler(e){
    
            this.setState({nombrePermiso: e.target.value})
         
    
}
descripcionHandler(e){
    if(e.target.value.length !== 251){
        this.setState({permisoDescripcion: e.target.value})
        console.log({permisoDescripcion: e.target.value})
    }else{
        alert("maximo 250 caracteres")
    }
}

handleSave(){
    if(this.state.validate){
        this.newPermiso();
        $(function(){
            $("#newPermiso").modal('hide')

        })
    }else{
        alert("incorrecto")
    }
}
newPermiso = async ()=>{
    try {
        const resp = await axios.post("http://localhost:8080/api/nuevoPermiso", {
          nombrePermiso: this.state.nombrePermiso,
          permisoDescripcion: this.state.permisoDescripcion,
          
        }
        )
        console.log(resp);
        alert('Permiso creado exitosamente');
        
      } catch (err) {
        // Handle Error Here
        alert('No se creo el permiso');
        console.error(err);
      }

}
/*put(permisoID){
    AdminPermisosService.updatePermiso(this.state.tipoId, permisoId);
   
}*/
verificarCambio(){
    if (this.state.validate !== false){
        $(function(){
          $("#newPermiso").modal('show')
          this.newPermiso()
        })
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
                                     
                                      onChange={(e)=>this.nombreHandler(e)}></input>
                                     </p>

                                    <textarea className="form-control" 
                                    placeholder="Ingresar la descripcion del Permiso"
                                    id="textoArea" 
                                    aria-label="With textarea" 
                                    
                                    onChange={(e)=>this.descripcionHandler(e)}>

                                    </textarea>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-center" >
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-secondary" onClick={this.handleSave}>Crear</button>
                        </div>
                    </div>
                    </div>
                </div>
        );
    }
}
export default ModalCrearPermiso;