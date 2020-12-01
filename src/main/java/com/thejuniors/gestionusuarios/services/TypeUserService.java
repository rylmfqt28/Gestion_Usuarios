package com.thejuniors.gestionusuarios.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.thejuniors.gestionusuarios.model.CrearTipo;

@Component
public class TypeUserService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<CrearTipo> allTypeUsers(){
        List<CrearTipo> typeUserList = jdbcTemplate.query(new PreparedStatementCreator(){
            @Override
            public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
                PreparedStatement ps = con.prepareStatement("SELECT * FROM TipoUsuario ORDER BY tipoUsuarioNombre");
                return ps;
            }
        }, new ResultSetExtractor <List<CrearTipo>>(){
            @Override
            public List<CrearTipo> extractData(ResultSet rs) throws SQLException {
                List<CrearTipo> loadTypeUserList = new ArrayList<>();
                while (rs.next()){
                    CrearTipo typeUser = new CrearTipo(rs.getInt("tipoUsuarioID"), rs.getString("tipoUsuarioNombre"), rs.getString("tipoUsuarioDescripcion"));
                    loadTypeUserList.add(typeUser);
                } 
                return loadTypeUserList;
            }
        });
        if(typeUserList != null){
            return typeUserList;
        }else{
            return null;
        }
    }
    
}
