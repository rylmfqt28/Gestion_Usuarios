package com.thejuniors.gestionusuarios.services;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.thejuniors.gestionusuarios.model.UsuarioCredenciales;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Component;

@Component
public class LoginService {
    
    @Autowired		
    private JdbcTemplate jdbcTemplate;

    public UsuarioCredenciales buscarUsuario(String username){
        UsuarioCredenciales user = jdbcTemplate.query(new PreparedStatementCreator(){
            @Override
            public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
                PreparedStatement ps = con.prepareStatement("select uc.CI, uc.nombreUsuario, uc.password, tu.tipoUsuarioNombre, eu.nombreEstado from UsuarioCredenciales uc , UsuarioTipoUsuario ut, TipoUsuario tu, UsuarioEstadoUsuario ue, EstadoUsuario eu where nombreUsuario=? and ut.CI=uc.CI and ue.CI=uc.CI and ut.tipoUsuarioID=tu.tipoUsuarioID and eu.tipoEstado=ue.tipoEstado");
                ps.setString(1, username);
                return ps;
            }
        }, new ResultSetExtractor<UsuarioCredenciales>(){
            @Override
            public UsuarioCredenciales extractData(ResultSet rs) throws SQLException{
                if (rs.next()){
                    UsuarioCredenciales user = new UsuarioCredenciales(rs.getString("CI"), rs.getString("nombreUsuario"), rs.getString("password"), rs.getString("tipoUsuarioNombre"), rs.getString("nombreEstado"));
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
