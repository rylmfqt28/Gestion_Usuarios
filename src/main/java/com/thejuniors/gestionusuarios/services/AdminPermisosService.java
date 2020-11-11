package com.thejuniors.gestionusuarios.services;

import com.thejuniors.gestionusuarios.model.Permisos;

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

@Component
public class AdminPermisosService {
    
    @Autowired		
    private JdbcTemplate jdbcTemplate;

    // Lista todos los permisos
    public List<Permisos> listaPermisos(){
        List<Permisos> permisos = jdbcTemplate.query(new PreparedStatementCreator(){
            @Override
            public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
                PreparedStatement ps = con.prepareStatement("SELECT permisoId, nombrePermiso, permisoDescripcion FROM Permisos");
                return ps;
            }
        }, new ResultSetExtractor <List<Permisos>>(){
            @Override
            public List<Permisos> extractData(ResultSet rs) throws SQLException {
                List<Permisos> permisosLista = new ArrayList<>();
                while (rs.next()){
                    Permisos permisos = new Permisos(rs.getInt("permisoId"), rs.getString("nombrePermiso"), rs.getString("permisoDescripcion"));
                    permisosLista.add(permisos);
                } 
                return permisosLista;
            }
        });
        if(permisos != null){
            return permisos;
        }else{
            return null;
        }
    }

    // Lista de permisos asignados a un tipo de usuario solicitado
    public List<Permisos> listaPermisosUsaurio(String tipoUsuarioNombre){
        List<Permisos> permisos = jdbcTemplate.query(new PreparedStatementCreator(){
            @Override
            public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
                PreparedStatement ps = con.prepareStatement("SELECT p.permisoId, p.nombrePermiso, p.permisoDescripcion FROM Permisos p, UsuarioPermisos up, TipoUsuario tp WHERE tp.tipoUsuarioNombre=? AND tp.tipoUsuarioID=up.tipoUsuarioID");
                ps.setString(1, tipoUsuarioNombre);
                return ps;
            }
        }, new ResultSetExtractor <List<Permisos>>(){
            @Override
            public List<Permisos> extractData(ResultSet rs) throws SQLException {
                List<Permisos> permisosLista = new ArrayList<>();
                while (rs.next()){
                    Permisos permisos = new Permisos(rs.getInt("permisoId"), rs.getString("nombrePermiso"), rs.getString("permisoDescripcion"));
                    permisosLista.add(permisos);
                } 
                return permisosLista;
            }
        });
        if(permisos != null){
            return permisos;
        }else{
            return null;
        }
    }

}
