import axios from 'axios';
class RegistroService
{
    base="/api/listarPermisos"

    base1="/api/listarPermisosUsuario/"
    base2="/api/listarPermisosNoUsuario/"

    getListaPermisos(){
        return axios.get(this.base).then(res => res.data);
    }

    getListaPermisosAsignados(tipoUsuarioNombre){
        return axios.get(this.base1 + tipoUsuarioNombre.replace(/ /g, "+")).then(res => res.data);
    }

    getListaPermisosNoAsignados(tipoUsuarioNombre){
        return axios.get(this.base2 + tipoUsuarioNombre.replace(/ /g, "+")).then(res => res.data);
    }

}
export default new RegistroService();