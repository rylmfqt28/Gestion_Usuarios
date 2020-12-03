import React, { Component } from 'react';

class ModalInformacion extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="modal fade" id="informacion" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header" id="Encabezado">
                            <h5 className="modal-title">informacion del Usuario</h5>              
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body" id="Cuerpo">

                        </div>
                        <div className="modal-footer">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalInformacion