package com.thejuniors.gestionusuarios.services;
//Implementar peticiones GET POST PUT DELETE respectivas a cada ventana
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

//import com.thejuniors.gestionusuarios.model.UsuarioSolicitud;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Component;


@Component
public class SolicitudeService {

    
   /* @Autowired		
    private JdbcTemplate jdbcTemplate;

    public UsuarioCredenciales enlistarSolicitudes(String tipo, String estado){
        UsuarioCredenciales user = jdbcTemplate.query(new PreparedStatementCreator(){
            @Override
            public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
                PreparedStatement ps = con.prepareStatement("select * from UsuarioCredenciales where nombreUsuario=?");
                ps.setString(1, username);
                return ps;
            }
        }, new ResultSetExtractor<UsuarioSolicitud>(){
            @Override
            public UsuarioCredenciales extractData(ResultSet rs) throws SQLException{
                if (rs.next()){
                    UsuarioCredenciales user = new UsuarioCredenciales(rs.getString("CI"), rs.getString("nombreUsuario"), rs.getString("password"));
                    return user;
                } else{
                    return null;
                }
            }
        });
        if(user != null){
            return user;
        }else{
            return null;
        }
    }*/

    

}
