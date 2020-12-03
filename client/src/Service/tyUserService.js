import axios from "axios";

class ModifyTypeUser{

    base = "/api/allTypeUsers"
    base1 = "/api/deleteTypeUser/"

    async getAllUserTypes(){
        const res = await axios.get(this.base);
        return res.data;
    }

    deletePermisoTypeUser(tipoUsuarioID){
        axios.delete(this.base1 + tipoUsuarioID).then(response => response.data)
    }



}

export default new ModifyTypeUser();