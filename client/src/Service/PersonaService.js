import axios from 'axios';

class PersonaService{
    baseUrl ="/persona"
    baseUrl2 ="/api/listaSolicitud"
    baseUrlPut="/api/cambio"


    getAll(){
        return axios.get(this.baseUrl + "/lista").then(res => res.data);
    }

    getTiposUser(tipo){
        return axios.get(this.baseUrl2 + "/"+tipo+"/Pendiente").then(res => res.data);
    }
    upListaUser(CI,tipoEstado){
        return axios.get(this.baseUrlPut + "/"+CI+"/"+tipoEstado).then(res => res.data);
    }
    /*getUser(String){
        return axios.get(this.baseUrl + "/user/{id}",String).then(res =>res.data);
    }*/
}

export default new PersonaService()

