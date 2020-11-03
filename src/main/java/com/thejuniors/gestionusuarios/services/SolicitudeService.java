package com.thejuniors.gestionusuarios.services;
//Implementar peticiones GET POST PUT DELETE respectivas a cada ventana


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.thejuniors.gestionusuarios.model.UsuarioSolicitud;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Component;


import java.util.List;
import java.util.ArrayList;



@Component

public class SolicitudeService{


    @Autowired		
    private JdbcTemplate jdbcTemplate;
 
    public List<UsuarioSolicitud> enlistarSolicitudes(String tipo, String estado) {
        List<UsuarioSolicitud> user = jdbcTemplate.query(new PreparedStatementCreator(){
            @Override
            public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
                PreparedStatement ps = con.prepareStatement("select u.CI, u.usuarioNombre, u.usuarioApellido, tu.tipoUsuarioNombre, eu.nombreEstado from Usuario u join UsuarioTipoUsuario utu on utu.CI = u.CI join TipoUsuario tu on tu.tipoUsuarioID = utu.tipoUsuarioID join UsuarioEstadoUsuario ueu on ueu.CI = u.CI join EstadoUsuario eu on eu.tipoEstado = ueu.tipoEstado where tu.tipoUsuarioNombre=? and eu.nombreEstado=?");
                ps.setString(1, tipo);
                ps.setString(2, estado);
                return ps;
            }
        }, new ResultSetExtractor <List<UsuarioSolicitud>>(){
            @Override
            public List<UsuarioSolicitud> extractData(ResultSet rs) throws SQLException {

                List<UsuarioSolicitud> user = new ArrayList<>();
                while (rs.next()){
                    
                   user.add(new UsuarioSolicitud(rs.getString("CI"), rs.getString("usuarioNombre"), rs.getString("usuarioApellido"),rs.getString("nombreEstado"), rs.getString("tipoUsuarioNombre")));
                   
                } 
                return user;
            }
        });
        if(user != null){
            return user;
        }else{
            return null;
        }
    }

    public void actualizarEstado(String tipoEstado, String CI)
    {
        jdbcTemplate.update(
                "UPDATE UsuarioEstadoUsuario SET tipoEstado = ? WHERE CI = ?", tipoEstado, CI);
    }

}
