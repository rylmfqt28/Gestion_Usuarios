package com.thejuniors.gestionusuarios.services;
//Implementar peticiones GET POST PUT DELETE respectivas a cada ventana


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


import java.util.List;
import java.util.ArrayList;



@Component
public class DatosTipoUser{


    @Autowired		
    private JdbcTemplate jdbcTemplate;
 
    public List<CrearTipo> enlistarSolicitudes() {
        List<CrearTipo> user = jdbcTemplate.query(new PreparedStatementCreator(){
            @Override
            public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
                PreparedStatement ps = con.prepareStatement("SELECT tipoUsuarioID, tipoUsuarioNombre, tipoUsuarioDescripcion FROM TipoUsuario");

                return ps;
            }
        }, new ResultSetExtractor <List<CrearTipo>>(){
            @Override
            public List<CrearTipo> extractData(ResultSet rs) throws SQLException {

                List<CrearTipo> user = new ArrayList<>();
                while (rs.next()){
                    user.add(new CrearTipo(rs.getInt("tipoUsuarioID"), rs.getString("tipoUsuarioNombre"), rs.getString("tipoUsuarioDescripcion") ));
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

}
