package com.thejuniors.gestionusuarios.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class UserListService {
    
    @Autowired
    private JdbcTemplate jdbcTemplate;

    /*public List<Permisos> listaPermisosNoUsaurio(String tipoUsuarioNombre){
        List<Permisos> permisos = jdbcTemplate.query(new PreparedStatementCreator(){
            @Override
            public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
                PreparedStatement ps = con.prepareStatement("SELECT p.permisoId, p.nombrePermiso, p.permisoDescripcion FROM Permisos p WHERE p.permisoId NOT IN(SELECT p1.permisoId FROM Permisos p1, UsuarioPermisos up1, TipoUsuario tp1 WHERE tp1.tipoUsuarioNombre=? AND tp1.tipoUsuarioID=up1.tipoUsuarioID AND p1.permisoId=up1.permisoId) GROUP BY p.permisoId");
                ps.setString(1, tipoUsuarioNombre);
                //ps.setString(2, tipoUsuarioNombre);
                return ps;
            }
        }, new ResultSetExtractor <List<Permisos>>(){
            @Override
            public List<Permisos> extractData(ResultSet rs) throws SQLException {
                List<Permisos> permisosLista = new ArrayList<>();
                while (rs.next()){
                    Permisos permisos = new Permisos(rs.getInt("permisoId"), rs.getString("nombrePermiso"), rs.getString("permisoDescripcion"));
                    permisosLista.add(permisos);
                } 
                return permisosLista;
            }
        });
        if(permisos != null){
            return permisos;
        }else{
            return null;
        }
    }*/

}
