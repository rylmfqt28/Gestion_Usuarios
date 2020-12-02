import axios from "axios";
import ListUsuarios from "../components/ListaUsuarios/ListUsuarios";

class ListaUsuarios{
    base = "/api/allUsers"
    base1="/api/userListOf/cd"

    getAllListaUsers(){
        return axios.get(this.base).then(res => res.data)
    }

    getListaTipoUser(tipoUsuarioNombre){
        return axios.get(this.base1 + tipoUsuarioNombre.replace(/ /g, "+")).then(res => res.data);
    }

}
export default ListUsuarios