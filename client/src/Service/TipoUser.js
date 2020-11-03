import axios from 'axios';

class TipoUser{
    baseUrl ="http://localhost:8080/tipousuario"
    
    getAll(){
        return axios.get(this.baseUrl + "/lista").then(res => res.data);
    }
}

export default new TipoUser()