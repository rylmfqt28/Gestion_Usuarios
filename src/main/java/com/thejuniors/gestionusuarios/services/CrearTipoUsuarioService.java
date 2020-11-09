package com.thejuniors.gestionusuarios.services;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.thejuniors.gestionusuarios.model.CrearTipo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Component;

//Implementar peticiones GET POST PUT DELETE respectivas a cada ventana
@Component
public class CrearTipoUsuarioService {

    


    @Autowired
    private JdbcTemplate jdbcTemplate;
    
    public void crearTipo(String nomTipo, String desc)
    {
        jdbcTemplate.update(
                "INSERT INTO TipoUsuario (tipoUsuarioNombre, tipoUsuarioDescripcion) VALUES (?, ?)",
                nomTipo, desc
                );
    }

    public CrearTipo existeTipo(String nombreTipo){
        
        CrearTipo tipo = jdbcTemplate.query(new PreparedStatementCreator(){
            @Override
            public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
                PreparedStatement ps = con.prepareStatement("SELECT tipoUsuarioNombre, tipoUsuarioDescripcion FROM TipoUsuario where tipoUsuarioNombre=?");
                ps.setString(1, nombreTipo);
                return ps;
            }
        }, new ResultSetExtractor<CrearTipo>(){
            @Override
            public CrearTipo extractData(ResultSet rs) throws SQLException{
                if (rs.next()){
                    CrearTipo user = new CrearTipo(rs.getString("tipoUsuarioNombre"), rs.getString("tipoUsuarioDescripcion"));
                    return user;
                } else{
                    return null;
                }
            }
        });
        if(tipo != null){
            return tipo;
        }else{
            return null;
        }
    } 

}
