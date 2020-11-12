import axios from 'axios';
class RegistroService
{
    base="/api/listaPaises"
    base1="/api/listaCiudades/"

    getAllCountries(){
        return axios.get(this.base).then(res => res.data);
    }
    getAllCities(pais){
        return axios.get(this.base1 + pais.replace(/ /g, "+")).then(res => res.data);
    }

}
export default new RegistroService();