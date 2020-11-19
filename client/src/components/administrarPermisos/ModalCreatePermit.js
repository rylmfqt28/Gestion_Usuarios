import React,{Component} from 'react';



class ModalCreatePermit extends Component{
    constructor(props){
        super(props)
        this.state={ 
                permiso:'',
                permisoDescripcion:''          
        }
        this.nombreHandler=this.nombreHandler.bind(this)
        this.descripcionHandler=this.descripcionHandler.bind(this)
    }
    nombreHandler(e){
        if(e.target.value.length === 20){ 
            alert("El maximo de caracteres es de 20")
        }else{
            
            if(e.target.value.match("^[a-zA-Z ]*$")!=null){
                this.setState({nombrePermiso: e.target.value})
            }
        }
    }
    descripcionHandler(e){
        if(e.target.value.length !== 250){
            this.setState({permisoDescripcion: e.target.value})
        }else{
            alert("maximo 250 caracteres")
        }
    }
     
    render(){
        return(
            <div className="modal fade" id="CreatePermiso" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                    <div className="modal-content" id="VentanaEmergente">
                        <div className="modal-header" id ="Encabezado">
                            {/*id="exampleModalLabel"*/}   
                            <h6 className="modal-title">Permisos</h6>
                            
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body" id="Cuerpo">
                        {
                            //this.state.User.map(
                            //user=>(
                            <div className="col" >
                                <h2>Crear Permisos</h2>
                                <br/>
                                <div>
                                    <input className='form-control' placeholder='ingresar nombre de permiso'onChange={(e)=>this.nombreHandler(e)}>
                                    </input>
                                    <br/>
                                    <textarea className='form-control' placeholder='ingresar la descripción de permiso' onChange={(e)=>this.descripcionHandler(e)} rows="5">

                                    </textarea>
                                </div>
                            </div>
                        }
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-outline-info" data-dismiss="modal">Crear</button>
                        </div>
                    </div>
                    </div>
                </div>
        );
    }
}
export default ModalCreatePermit;