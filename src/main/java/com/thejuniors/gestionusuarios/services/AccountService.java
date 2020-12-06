package com.thejuniors.gestionusuarios.services;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Component;

import com.thejuniors.gestionusuarios.model.Account;
//import com.thejuniors.gestionusuarios.model.ModifAccount;
import com.thejuniors.gestionusuarios.model.ModifPassword;

@Component
public class AccountService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Account> accountData(String CI){
        List<Account> userData = jdbcTemplate.query(new PreparedStatementCreator(){
            @Override
            public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
                PreparedStatement ps = con.prepareStatement("SELECT u.usuarioNombre, u.usuarioApellido, u.CI, p.paisNombre, c.ciudadNombre, u.direccion, u.correo, u.telefono, uc.nombreUsuario, uc.password FROM Usuario u, Pais p, Ciudad c, UsuarioCredenciales uc WHERE u.CI=? AND u.CI=uc.CI AND u.paisID=p.paisID AND p.paisID=c.paisID AND u.ciudadID=c.ciudadID");
                ps.setString(1, CI);
                return ps;
            }
        }, new ResultSetExtractor <List<Account>>(){
            @Override
            public List<Account> extractData(ResultSet rs) throws SQLException {
                List<Account> accountInfo = new ArrayList<>();
                while (rs.next()){
                    Account account = new Account(rs.getString("usuarioNombre"), rs.getString("usuarioApellido"), rs.getString("CI"), rs.getString("paisNombre"), rs.getString("ciudadNombre"), rs.getString("direccion"),rs.getString("correo"), rs.getString("telefono"), rs.getString("nombreUsuario"), rs.getString("password"));
                    accountInfo.add(account);
                } 
                return accountInfo;
            }
        });
        if(userData != null){
            return userData;
        }else{
            return null;
        }
    }

    // Query para modificar contraseña
    public void updatePassword(ModifPassword password){
        jdbcTemplate.update(
            "UPDATE UsuarioCredenciales SET password=? WHERE CI=?",
            password.getPassword(), password.getCI()
        );
    }
    
}
