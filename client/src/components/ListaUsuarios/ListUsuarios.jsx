import React, { Component } from 'react';
import TipoUser from '../../Service/TipoUser';
import NavMenu from '../menuAdmin/NavMenu'

class ListUsuarios extends Component{
    constructor(props){
     super(props);
     this.state = {
        tipoUsuario : [],
        usuarios : ["roger","zusana","Dani","Nicol"]
     }   
    }

    componentDidMount(){
        TipoUser.getAll().then(data => this.setState({tipoUsuario : data}))
    }

    render(){
        const Usuarios = this.state.usuarios.map((Usuario,index)=>{
            return(
                <tr key={index}>
                    <td>
                        {Usuario}        
                    </td>
                    <td>
                        <button className="btn btn-info col-sm">ver usuario</button>
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
                        <select className="form-control form-control-sm" >
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
                            <table className="table"  id="lista">
                                <thead>
                                    <tr>
                                        <th scope="col">Nombre de Usuario</th>
                                        <th scope="col">Informacion</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {Usuarios}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default ListUsuarios