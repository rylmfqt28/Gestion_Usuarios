import React,{Component} from 'react'

class ModalEditarPermiso extends Component{
    constructor(props){
        super(props)
        this.state={ 
                nombre:"titulo",
                descripcion:"descripcion"         
        }
        this.handleSave=this.handleSave.bind(this)
        this.nombreHandler=this.nombreHandler.bind(this)
        this.handleDeleteKey=this.handleDeleteKey.bind(this) 
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            nombre: nextProps.nombre,
            descripcion: nextProps.descripcion,
        });
    }

    handleDeleteKey(e){
        let key = e.keyCode || e.which;
        console.log(key)
        if (this.state.nombre.length !== 0 && (key === 8 || key === 127)) {
            let nuevo = this.state.nombre.substring(0, this.state.nombre.length - 1);
            console.log(nuevo)
            this.setState({nombre: nuevo})
        }
    }

    nombreHandler(e){
        let key = e.keyCode || e.which;
        let tecla = String.fromCharCode(key);
        let letras = " áéíóúñÑ";
        console.log(tecla)
        if (this.state.nombre.length !== 20 || (key === 8)) {
            console.log('llego malditod');
            if ((key <= 90 && key >= 65) || (key <= 122 && key >= 97) || (key === 164) || (key === 165) || (letras.indexOf(tecla) !== -1)) {
                this.setState({nombre: e.target.value+tecla})
            }
        } else {
            alert('El maximo de caracteres es de 20');
        }
        /*if(!e.target.value){
            console.log("este campo no debe estar vacio")
        }
        if(this.state.nombre.length != 20){ 
            if(e.target.value.match("^[a-zA-Z ]*$")!=null){
                this.setState({nombre: e.target.value})
            }
        }else{
            alert("El maximo de caracteres es de 20")
        }*/
    }
     
    descripcionHandler(e){
        this.setState({descripcion: e.target.value})
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
                                    <p><input className="form-control text-center" value={this.state.nombre} onKeyDownCapture={(e)=>this.handleDeleteKey(e)} onKeyPress={(e)=>this.nombreHandler(e)}></input></p>
                                    <textarea className="form-control" id="textoArea" aria-label="With textarea" value={this.state.descripcion} onChange={(e)=>this.descripcionHandler(e)}></textarea>
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