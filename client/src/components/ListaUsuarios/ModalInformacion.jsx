import {Component} from 'react'

class ModalInformacion extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="modal fade" id="informacion" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">

                    </div>
                </div>
            </div>
        );
    }
}

export default ModalInformacion