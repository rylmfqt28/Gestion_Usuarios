import React, {Fragment, Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Request.css';
import axios from 'axios';

import {Table,Button,Container, Modal,ModalHeader,ModalBody,FormGroup,ModalFooter} from "reactstrap";



 
class Request extends Component {

     state={
     modalMostrar: false,
     usuario2 : [],
     usuario3 : [],
     form: {
      tipoUsuarioID: "",
      tipoUsuarioNombre: "",
      tipoUsuarioDescripcion: "",
    },
 };

  componentDidMount()
  {

    axios
     .get("http://localhost:3001/api/get")
    .then(response=>{
      console.log(response);
      this.setState({usuario2: response.data })
      
    })
    .catch(error=>{
      console.log(error);
    });
  }
  componentDidMount2()
  {

    axios
     .get("http://localhost:3001/api/get2")
    .then(response=>{
      console.log(response);
      this.setState({usuario3: response.data })
      
    })
    .catch(error=>{
      console.log(error);
    });
  }

  mostrarModalUser = (dato) => {
    this.setState({
      form: dato,
      modalUser: true
    });
  };
 
  render()
    {
      return (
    <Fragment>
         <div className="barraNav">
         <nav className="navbar navbar-light">
          <a className="navbar-brand">Nombre App // Logo</a>
         </nav>
         </div>
         <br/>
         <div className="app-bar">
         <h1 className="app-bar-title">Solicitudes de Personal</h1>
         </div>
         <section className="app-section container">
         {this.renderUsuarioSelector()}

         <div className="top-margin-small">
         {this.renderSelectedCard(this.state.identy)}
         </div>
       
      </section>
    </Fragment>
         )
    }
  renderUsuarioSelector()      
     {
        return (
        <div className="form-group top-margin-small">
        <label className="solicitud-selector-label">Ver Solicitudes de tipo</label>
        <select className="solicitud-selector form-control"

        onChange={(e) => this.setState({identy: e.target.value })}>
         
         {this.state.usuario2.map(elemento => (
        <option key={elemento.id} value = {elemento.tipoUsuarioDescripcion}>
             {elemento.tipoUsuarioNombre} 
        </option> )  )   }
        </select>
        </div>
        );
      }
  renderSelectedCard(identy) 
  {    
    return (   
       <>
      <Container>
        <br />
        <br />
        <br />
        <Table>
          <thead>
            <tr>
              <th>Usuarios</th>
              <th>Opciones</th>
            </tr>
          </thead>

          <tbody>
            {this.state.usuario2.map((dato) => (
               <tr key={dato.id}>
               <td></td>
               <td></td>
               <td>{dato.tipoUsuarioID}</td>
               {dato.tipoUsuarioNombre}
               {dato.tipoUsuarioDescripcion}
               
               <td>
                <Button color="primary" onClick={()=> this.eliminar(dato)}>Aceptar</Button>{" "}
                <Button color="danger" onClick={()=> this.eliminar(dato)}>Rechazar</Button>{" "}
                  <Button
                    color="primary"
                    onClick={() => this.mostrarModalUser(dato)}>
                    Ver Usuario
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      
      <Modal isOpen={this.state.modalUser}>
          <ModalHeader>
           <div><h3>Solicitudes de Personal</h3></div>
        
          </ModalHeader>

          <ModalBody>
  
            <FormGroup>
              <label>
                Apellidos: 
              </label>
            {this.state.form.tipoUsuarioID}
            </FormGroup>
            
            <FormGroup>
              <label>
                Cedula de Identidad: 
              </label>
              {this.state.form.tipoUsuarioNombre}
            </FormGroup>

            <FormGroup>
              <label>
                Pais: 
              </label>
              {this.state.form.tipoUsuarioDescripcion}
            </FormGroup>
            <FormGroup>
              <label>
                Ciudad: 
              </label>
            </FormGroup><FormGroup>
              <label>
                Direccion: 
              </label>
            </FormGroup><FormGroup>
              <label>
                Correo: 
              </label>
            </FormGroup>
            <FormGroup>
              <label>
                Telefono: 
              </label>
            </FormGroup>
            <FormGroup>
              <label>
                Nombre de Usuario: 
              </label>
            </FormGroup>
            <FormGroup>
              <label>
                Solicitud de tipo: 
              </label>
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)} >
              Salir
            </Button>
          </ModalFooter>
        </Modal> 
  </>
    )
  }
}
export default Request;
//<td>{identy}</td>