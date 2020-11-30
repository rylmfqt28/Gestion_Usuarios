import React, { Component } from 'react';
import NavMenu from '../menuAdmin/NavMenu'

class ListUsuarios extends Component{
    constructor(props){
     super(props);
     this.state = {
        usuarios : ["roger","zusana","Dani","Nicol"]
     }   
    }

    render(){
        const Usuarios = this.state.usuarios.map((Usuario,index)=>{
            return(
                <tr key={index}>
                    <td>
                        {Usuario}        
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
                <div className="row">
                    <div className="col-3">
                        <label>Ver usuarios de tipo:  </label>
                    </div>
                    <div className="col-3">
                        <select className="form-control form-control-sm" >
                            <option value=" " >{"---"}</option>
                        </select>
                    </div>
                </div>
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