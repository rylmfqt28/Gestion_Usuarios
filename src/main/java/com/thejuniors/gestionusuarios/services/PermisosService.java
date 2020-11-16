package com.thejuniors.gestionusuarios.services;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.thejuniors.gestionusuarios.model.EditPermiso;
import com.thejuniors.gestionusuarios.model.Permisos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Component;

@Component
public class PermisosService {
    
    @Autowired		
    private JdbcTemplate jdbcTemplate;

    // Verifica si existe el permiso
    public Permisos buscarPermiso(String nombrePermiso){
        Permisos permiso = jdbcTemplate.query(new PreparedStatementCreator(){
            @Override
            public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
                PreparedStatement ps = con.prepareStatement("SELECT * FROM Permisos WHERE nombrePermiso=?");
                ps.setString(1, nombrePermiso);
                return ps;
            }
        }, new ResultSetExtractor<Permisos>(){
            @Override
            public Permisos extractData(ResultSet rs) throws SQLException{
                if (rs.next()){
                    Permisos permiso = new Permisos(rs.getInt("permisoId"), rs.getString("nombrePermiso"), rs.getString("permisoDescripcion"));
                    return permiso;
                } else{
                    return null;
                }
            }
        });
        if(permiso != null){
            return permiso;
        }else{
            return null;
        }
    }

    // query para crear un nuevo dato en la tabla Permisos
    public void nuevoPermiso(EditPermiso permiso){
        jdbcTemplate.update(
            "INSERT INTO Permisos (nombrePermiso, permisoDescripcion) VALUE (?, ?)",
            permiso.getNombrePermiso(), permiso.getPermisoDescripcion()
        );
    }

    // query para actualizar un permiso
    public void updatePermiso(Permisos permiso){
        jdbcTemplate.update(
            "UPDATE Permisos SET nombrePermimso=?, permisoDescripcion=? WHERE permisoId=?",
            permiso.getNombrePermiso(), permiso.getPermisoDescripcion(), permiso.getPermisoId()
        );
    }

}
