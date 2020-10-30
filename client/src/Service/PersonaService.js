import axios from 'axios';

class PersonaService{
    baseUrl ="http://localhost:8080/persona"
    
    getAll(){
        return axios.get(this.baseUrl + "/lista").then(res => res.data);
    }

    /*getUser(String){
        return axios.get(this.baseUrl + "/user/{id}",String).then(res =>res.data);
    }*/
}

export default new PersonaService()