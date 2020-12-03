import axios from "axios";

class ModifyTypeUser{
    base = "/api/allTypeUsers"

    async getAllUserTypes(){
        const res = await axios.get(this.base);
        return res;
    }
}

export default new ModifyTypeUser();