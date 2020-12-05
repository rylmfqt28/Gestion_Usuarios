import React, { Component } from 'react';
import ListaUsuariosService from '../../Service/ListaUsuariosService';
import TipoUser from '../../Service/TipoUser';
import NavMenu from '../menuAdmin/NavMenu';
import ModalInformacion from './ModalInformacion'
import './ListUsuarios.css'

class ListUsuarios extends Component{
    constructor(props){
     super(props);
     this.state = {
        tipoUsuario : [],
        usuarios : [],
        detalleUsuario : {}
     }   
     this.UpdateList = this.UpdateList.bind(this)
     this.updateIndex = this.updateIndex.bind(this)
         }

    componentDidMount(){
        TipoUser.getAll().then(data => this.setState({tipoUsuario : data}))
        ListaUsuariosService.getAllListaUsers().then(data => this.setState({usuarios: data}))
    }

    UpdateList(e){
        console.log(e.target.value)
        if(e.target.value===" "){
            ListaUsuariosService.getAllListaUsers().then(data => this.setState({usuarios: data}))
        }else{
            ListaUsuariosService.getListaTipoUser(e.target.value).then(data => this.setState({usuarios : data}))
        }
    }

    updateIndex(index){
        this.setState({detalleUsuario:this.state.usuarios[index]})
        console.log(this.state.usuarios[index])
    }

    render(){
        
        const Usuarios = this.state.usuarios.map((Usuario,index)=>{
            return(
                <tr key={index}>
                    <td className="col-sm-6">
                        {Usuario.usuarioNombre + " " + Usuario.usuarioApellido}         
                    </td>
                    <td className="col-sm-6" align="center">
                        <button className="btn btn-info"
                        onClick = {()=>this.updateIndex(index)}
                        data-toggle="modal"
                        data-target="#informacion">Detalles
                        </button>
                    </td>
                </tr>
            );
        })
        return(
            <div>
                <NavMenu />
                <div>
                    <h1 align = "center">Lista de Usuarios</h1>
                    <br></br>
                </div>
                <form className="form-inline" >
                    <div className="col-sm-3">
                        <label>Ver usuarios de tipo:  </label>
                    </div>
                    <div className="col-sm-3">
                        <select className="form-control form-control-sm" onChange={this.UpdateList}>
                            <option value=" " >{"---"}</option>
                            {
                                this.state.tipoUsuario.map((tipoUsuario,index)=>(
                                <option key="index" value={tipoUsuario.crearTipo}>{tipoUsuario.crearTipo} </option>
                                ))
                            }
                        </select>
                    </div>
                </form>
                <div className="row" id="list">
                            <table className="table-default table-striped" >
                                <thead>
                                    <tr>
                                        <th className="col-sm-6">Nombre de Usuario</th>
                                        <th className="col-sm-6">Información</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Usuarios} 
                                </tbody>
                            </table>
                    
                </div>
                <ModalInformacion
                detalleUsuario = {this.state.detalleUsuario}
                //detalleUsuario = {this.state.detalleUsuario}
                />
            </div>
        );
    }

}
export default ListUsuarios;