import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Request.css'
import {Table,Button,Container, Modal,ModalHeader,ModalBody,FormGroup,ModalFooter,} from "reactstrap";

const data = [
  { id: 1, personaje: "Esteban Pirito Del Castillo" },
  { id: 2, personaje: "Elsa Pato Perez"},
  { id: 3, personaje: "Cesar Nozoa"},
  { id: 4, personaje: "Elba Zurita"},
  { id: 5, personaje: "Esther Moso Rostro"},
  { id: 6, personaje: "Helena Nito Perez"},
];



class Request extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      personaje: "",
    },
  };

  mostrarModalMostrar = (dato) => {
    this.setState({
      form: dato,
      modalMostrar: true,
    });
  };

 

  
  render() {
    
    return (
      <>
        <Container>
        <br />
        <div className="barraNav"> 
        <nav className="navbar navbar-light justify-content-between">
          <a className="navbar-brand">Nombre app // Logo</a>
          <form className="form-inline">
          </form>
        </nav>
        </div>
      
        <label className="title-inicio">
                <b>
                  Solicitud Personal
                        </b>

              </label>
     
          <br />
          <br />
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Usuario</th>
                <br/>            
                <th>Opciones</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.personaje}</td>
                  <td>{dato.anime}</td>
                  <td>
             
                    <Button
                      color="primary"
                      onClick={() => ""} >Aceptar
                    </Button>{" "}

                    <Button
                      color="primary"
                      onClick={() => ""}>Rechazar
                    </Button>{" "}
                    <Button color="danger"
                    onClick={()=> this.mostrarModalMostrar(dato)}>Ver Usuario</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalMostrar}>
          <ModalHeader>
           <div><h3>Solicitudes de Personal</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Nombre:
              </label>
            </FormGroup>
            <FormGroup>
              <label>
               Apellido:
              </label>
            </FormGroup> 
            <FormGroup>
              <label>
               Cedula de identidad:
              </label>
            </FormGroup>
            <FormGroup>
              <label>
               Pais:
              </label>
            </FormGroup>
            <FormGroup>
              <label>
               Ciudad:
              </label>
            </FormGroup>
            <FormGroup>
              <label>
               Direccion:
              </label>
            </FormGroup>
            <FormGroup>
              <label>
               Cedula de identidad:
              </label>
            </FormGroup>
            <FormGroup>
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
               Nombre de usuario:
              </label>
            </FormGroup>
            <FormGroup>
              <label>
               Solicitud tipo:
              </label>
            </FormGroup>
            <div className="containerPrincipal">
            <form>
                  <label> Lorem ipsum dolbus commodi voluptas animi.Lorem ipsum dolbus commodi voluptas animiLorem ipsum dolbus commodi voluptas animi</label>
            </form>

            </div>

          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => ""}>Aceptar</Button>
           
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default Request;