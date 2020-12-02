import axios from "axios";

class ListaUsuariosService{
    base = "/api/allUsers"
    base1="/api/userListOf/"

    getAllListaUsers(){
        return axios.get(this.base).then(res => res.data)
    }

    getListaTipoUser(tipoUsuarioNombre){
        return axios.get(this.base1 + tipoUsuarioNombre.replace(/ /g, "+")).then(res => res.data);
    }

}
export default new ListaUsuariosService