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
        usuarios : []
     }   
     this.UpdateList = this.UpdateList.bind(this)
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

    render(){
        const Usuarios = this.state.usuarios.map((Usuario,index)=>{
            return(
                <tr key={index}>
                    <td className="col-sm-6">
                        {Usuario.usuarioNombre + " " + Usuario.usuarioApellido}        
                    </td>
                    <td className="col-sm-6">
                        <button className="btn btn-info col-sm"
                        data-toggle="modal"
                        data-target="#informacion">ver usuario</button>
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
                                <option key="index" value={tipoUsuario.crearTipo}>{tipoUsuario.crearTipo}</option>
                                ))
                            }
                        </select>
                    </div>
                </form>
                <div className="row">
                    <div className="table-responsive">

                        <div className="containerTabla">
                            <table className="table table-fixed">
                                <thead>
                                    <tr>
                                        <th scope="col-sm-6">Nombre de Usuario</th>
                                        <th scope="col-sm-6">Informacion</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {Usuarios}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <ModalInformacion/>
            </div>
        );
    }

}
export default ListUsuarios;