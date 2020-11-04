import axios from 'axios';

class TipoUser{
    baseUrl = "/api"
    
    getAll(){
        return axios.get(this.baseUrl + "/listaTipos").then(res => res.data);
    }
}

export default new TipoUser()