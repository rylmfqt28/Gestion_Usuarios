import axios from 'axios';
class PermisosController
{
    base="/api/permiso/"
    base1="/api/nuevoPermiso/"
    base2="/api/actualizarPermiso/"
    base3="/api/eliminarPermiso/"


 
    getBuscarPermiso(nombrePermiso){
        return axios.get(this.base + nombrePermiso.replace(/ /g, "+")).then(res => res.data);
    }

  
    deletePermiso(permisoId){
        axios.delete(this.base3 + permisoId).then(response => response.data)
    }
  
}
export default new PermisosController();



