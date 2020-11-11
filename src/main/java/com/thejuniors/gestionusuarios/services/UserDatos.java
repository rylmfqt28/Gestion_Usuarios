package com.thejuniors.gestionusuarios.services;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.thejuniors.gestionusuarios.model.UsuarioAdmin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Component;

@Component
public class UserDatos {
    
    @Autowired		
    private JdbcTemplate jdbcTemplate;

    public UsuarioAdmin buscarUsuario(String ci){
        UsuarioAdmin user = jdbcTemplate.query(new PreparedStatementCreator(){
            @Override
            public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
                PreparedStatement ps = con.prepareStatement("select CI, usuarioNombre, usuarioApellido from Usuario where CI=?");
                ps.setString(1, ci);
                return ps;
            }
        }, new ResultSetExtractor<UsuarioAdmin>(){
            @Override
            public UsuarioAdmin extractData(ResultSet rs) throws SQLException{
                if (rs.next()){
                    UsuarioAdmin user = new UsuarioAdmin(rs.getString("CI"), rs.getString("usuarioNombre"), rs.getString("usuarioApellido"));
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
    }

}
