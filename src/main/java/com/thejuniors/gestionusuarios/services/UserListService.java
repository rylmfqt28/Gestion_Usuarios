package com.thejuniors.gestionusuarios.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Component;

import com.thejuniors.gestionusuarios.model.UserData;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Component
public class UserListService {
    
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<UserData> allUsers(){
        List<UserData> userList = jdbcTemplate.query(new PreparedStatementCreator(){
            @Override
            public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
                PreparedStatement ps = con.prepareStatement("SELECT u.usuarioNombre, u.usuarioApellido, u.CI, p.paisNombre, c.ciudadNombre, u.direccion, u.correo, u.telefono, uc.nombreUsuario, tu.tipoUsuarioNombre FROM Usuario u, UsuarioTipoUsuario ut, TipoUsuario tu, Pais p, Ciudad c, UsuarioCredenciales uc WHERE u.CI=uc.CI AND u.CI=ut.CI AND u.paisID=p.paisID AND p.paisID=c.paisID AND u.ciudadID=c.ciudadID AND ut.tipoUsuarioID=tu.tipoUsuarioID");
                return ps;
            }
        }, new ResultSetExtractor <List<UserData>>(){
            @Override
            public List<UserData> extractData(ResultSet rs) throws SQLException {
                List<UserData> UserDataList = new ArrayList<>();
                while (rs.next()){
                    UserData userData = new UserData(rs.getString("usuarioNombre"), rs.getString("usuarioApellido"), rs.getString("CI"), rs.getString("paisNombre"), rs.getString("ciudadNombre"), rs.getString("direccion"),rs.getString("correo"), rs.getString("telefono"), rs.getString("nombreUsuario"), rs.getString("tipoUsuarioNombre"));
                    UserDataList.add(userData);
                } 
                return UserDataList;
            }
        });
        if(userList != null){
            return userList;
        }else{
            return null;
        }
    }

    public List<UserData> usersListOf(String tipoUsuarioNombre){
        List<UserData> userList = jdbcTemplate.query(new PreparedStatementCreator(){
            @Override
            public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
                PreparedStatement ps = con.prepareStatement("SELECT u.usuarioNombre, u.usuarioApellido, u.CI, p.paisNombre, c.ciudadNombre, u.direccion, u.correo, u.telefono, uc.nombreUsuario, tu.tipoUsuarioNombre FROM Usuario u, UsuarioTipoUsuario ut, TipoUsuario tu, Pais p, Ciudad c, UsuarioCredenciales uc WHERE u.CI=uc.CI AND u.CI=ut.CI AND u.paisID=p.paisID AND p.paisID=c.paisID AND u.ciudadID=c.ciudadID AND ut.tipoUsuarioID=tu.tipoUsuarioID AND tu.tipoUsuarioNombre=?");
                ps.setString(1, tipoUsuarioNombre);
                return ps;
            }
        }, new ResultSetExtractor <List<UserData>>(){
            @Override
            public List<UserData> extractData(ResultSet rs) throws SQLException {
                List<UserData> UserDataList = new ArrayList<>();
                while (rs.next()){
                    UserData userData = new UserData(rs.getString("usuarioNombre"), rs.getString("usuarioApellido"), rs.getString("CI"), rs.getString("paisNombre"), rs.getString("ciudadNombre"), rs.getString("direccion"),rs.getString("correo"), rs.getString("telefono"), rs.getString("nombreUsuario"), rs.getString("tipoUsuarioNombre"));
                    UserDataList.add(userData);
                } 
                return UserDataList;
            }
        });
        if(userList != null){
            return userList;
        }else{
            return null;
        }
    }

}
