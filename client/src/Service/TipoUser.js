import axios from 'axios';

class TipoUser{
    baseUrl ="/tipousuario"
    
    getAll(){
        return axios.get(this.baseUrl + "/lista").then(res => res.data);
    }
}

export default new TipoUser()