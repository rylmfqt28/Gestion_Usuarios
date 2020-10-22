import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import './VerUsuario.css'

function User(){
  return (
    <div class="Container">
        <br></br>
        <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#UserData">
            Ver Usuario
        </button>
        {/*tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"  aria-hidden="true"*/}
        <div className="UserDateWindows" class="modal fade" id="UserData">
            <div class="modal-dialog modal-lg">
            <div class="modal-content" id="VentanaEmergente">
                <div class="modal-header" id ="Encabezado">
                    {/*id="exampleModalLabel"*/}   
                    <h5 className="TitleUserDateWindows" class="modal-title" >Datos de Usuario</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" id="Cuerpo">
                    <div class="row">
                        <div class= "col-sm-6">
                            
                                <ul class="list-group list-group-flush" >
                                    <br></br>
                                    <li class="list-group-item"><small>Nombre:</small></li>
                                    <li class="list-group-item"><small>Apellido:</small></li>
                                    <li class="list-group-item"><small>C.I.:</small></li>
                                    <li class="list-group-item"><small>Pais:</small></li>
                                    <li class="list-group-item"><small>Ciudad:</small></li>
                                    <li class="list-group-item"><small>Direccion:</small></li>
                                    <li class="list-group-item"><small>Correo:</small></li>
                                    <li class="list-group-item"><small>Telefono:</small></li>
                                    <li class="list-group-item"><small>Nombre de Usuario:</small></li>
                                    <li class="list-group-item"><small>Solicitud de tipo:</small></li>
                                </ul>
                            
                        </div>
                        <div class= "col-sm-6">
                            <div>
                                <h5 id="MotivoCabeza">motivo</h5>
                                <div class="card">
                                    <div class="card-body" id ="MotivoCuerpo">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                            Phasellus eleifend porta sem eget pretium. 
                                            Etiam tempor facilisis mollis. Suspendisse tempor est sed turpis molestie rutrum eu vel purus. 
                                            Cras sit amet facilisis leo. Nam rhoncus vestibulum lobortis. Cras varius metus in ante malesuada mollis. 
                                            Nam non magna maximus, sagittis lectus eu, luctus justo. Morbi et aliquam purus. 
                                            Proin elementum mauris sed erat dictum, ut blandit eros tempor.
                                        </p>
                                        <p>Vestibulum nulla purus, placerat ac efficitur vel, volutpat quis ante. 
                                            Etiam a mattis quam, ut semper leo. Integer eu tortor ut ligula molestie rutrum. 
                                            Nunc eget est ex. In fringilla est et ligula dictum, eu dictum velit condimentum. 
                                            Fusce aliquam vel elit condimentum placerat. Pellentesque at nulla ex. 
                                            Praesent porttitor elementum leo, vitae ornare orci egestas a. Duis id faucibus nisl. 
                                            In ac tellus vestibulum, interdum purus convallis, imperdiet felis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
    
}
export default User;