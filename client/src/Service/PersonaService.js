import axios from 'axios';

class PersonaService{
    baseUrl ="/persona"
    baseUrl2 ="/api/listaSolicitud"
    baseUrlPut="/api/cambio"
    baseUrlUser="/api/admin"


    getAll(){
        return axios.get(this.baseUrl + "/lista").then(res => res.data);
    }

    getTiposUser(tipo){
        return axios.get(this.baseUrl2 + "/"+tipo.replace(/ /g, "+")+"/Pendiente").then(res => res.data);
    }
    putListaUser(CI,tipoEstado){
        return axios.put(this.baseUrlPut + "/"+CI+"/"+tipoEstado);
    }
    getUser(ci){
        return axios.get(this.baseUrlUser + "/"+ci).then(res =>res.data);
    }
}

export default new PersonaService()

