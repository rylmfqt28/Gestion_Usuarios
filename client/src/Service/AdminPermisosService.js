import axios from 'axios';
class RegistroService
{
    base="/api/listarPermisos"

    base1="/api/listarPermisosUsuario/"
    base2="/api/listarPermisosNoUsuario/"
    base3="/api/asignarPermiso/"
    base4="/api/quitarPermiso/"
    base5="/api/editarPermiso/"
    getListaPermisos(){
        return axios.get(this.base).then(res => res.data);
    }

    getListaPermisosAsignados(tipoUsuarioNombre){
        return axios.get(this.base1 + tipoUsuarioNombre.replace(/ /g, "+")).then(res => res.data);
    }

    getListaPermisosNoAsignados(tipoUsuarioNombre){
        return axios.get(this.base2 + tipoUsuarioNombre.replace(/ /g, "+")).then(res => res.data);
    }

    postAsignarPermiso(add){
        axios.post(this.base3,add).then(response => response.data);
    }

    deletePermiso(tipoUsuarioId,permisoId){
        axios.delete(this.base4 + tipoUsuarioId + "/" + permisoId).then(response => response.data)
    }
    updatePermiso(tipoUsuarioId,permisoId){
        axios.put(this.base5 + tipoUsuarioId + "/" + permisoId).then(response => response.data)
    }
}
export default new RegistroService();