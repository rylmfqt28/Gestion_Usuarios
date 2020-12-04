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
import com.thejuniors.gestionusuarios.model.TipoUserName;

@Component
public class TypeUserService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    // lista de tipos de usuario
    public List<CrearTipo> allTypeUsers(){
        List<CrearTipo> typeUserList = jdbcTemplate.query(new PreparedStatementCreator(){
            @Override
            public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
                PreparedStatement ps = con.prepareStatement("SELECT * FROM TipoUsuario WHERE tipoUsuarioNombre<>'Cliente' AND tipoUsuarioNombre<>'Administrador' ORDER BY tipoUsuarioNombre");
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
    //Obtener Nombre de tipo de tipo de usuario
    public TipoUserName buscarNombreTipo(String ci){
        TipoUserName user = jdbcTemplate.query(new PreparedStatementCreator(){
            @Override
            public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
                PreparedStatement ps = con.prepareStatement("select tipoUsuarioNombre from TipoUsuario where tipoUsuarioID=(select tipoUsuarioID from UsuarioTipoUsuario where CI=?)");
                ps.setString(1, ci);
                return ps;
            }
        }, new ResultSetExtractor<TipoUserName>(){
            @Override
            public TipoUserName extractData(ResultSet rs) throws SQLException{
                if (rs.next()){
                    TipoUserName user = new TipoUserName(rs.getString("tipoUsuarioNombre"));
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

    // Actualizar un tipo de usuario
    public void updateTypeUser(CrearTipo typeUser){
        jdbcTemplate.update(
            "UPDATE TipoUsuario SET tipoUsuarioNombre=?, tipoUsuarioDescripcion=? WHERE tipoUsuarioID=?",
            typeUser.getCrearTipo(), typeUser.getDescripcionTipo(), typeUser.getTipoUsuarioID()
        );
    }
    
    /*
    * Eliminar tipo de usuario antes cambia a cliente a los usuarios que tienen asignado el tipo de usuario
    * a eliminar mediante metodo changeClient y deletePermitsOfTypeUser
     */
    public void deleteTypeUser(Integer tipoUsuarioID){
        changeClient(tipoUsuarioID);
        deletePermitsOfTypeUser(tipoUsuarioID);
        jdbcTemplate.update(
            "DELETE FROM TipoUsuario WHERE tipoUsuarioID=?",
            tipoUsuarioID
        );
    }

    private void changeClient(Integer tipoUsuarioID){
        jdbcTemplate.update(
                "UPDATE UsuarioTipoUsuario SET tipoUsuarioID=11 WHERE tipoUsuarioID=?",
                tipoUsuarioID
        );
    }

    private void deletePermitsOfTypeUser(Integer tipoUsuarioID){
        jdbcTemplate.update(
            "DELETE FROM UsuarioPermisos WHERE tipoUsuarioID=?",
            tipoUsuarioID
        );
    }

}
