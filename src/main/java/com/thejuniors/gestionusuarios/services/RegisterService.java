package com.thejuniors.gestionusuarios.services;

import com.thejuniors.gestionusuarios.model.Register;
//import com.thejuniors.gestionusuarios.model.Ciudad;
import com.thejuniors.gestionusuarios.model.Pais;

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
public class RegisterService {

    @Autowired		
    private JdbcTemplate jdbcTemplate;

    // Metodo para registrar nuevos usaurios
    public void agregarUsuario(Register register){

        jdbcTemplate.update(
            "INSERT INTO Usuario (CI, usuarioNombre, usuarioApellido, paisID, ciudadID, direccion, correo, telefono, genero) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", 
            register.getCI(), register.getUsuarioNombre(), register.getUsuarioApellido(), register.getPaisID(), register.getCiudadID(), register.getDireccion(), register.getCorreo(), register.getTelefono(), register.getTelefono() 
        );
        
        agregarTipo(register.getCI(), register.getTipoUsuarioID(), register.getMotivo());
        if(register.getTipoUsuarioID() == 11){
            agregarEstado(register.getCI(), 1);
        }else{
            agregarEstado(register.getCI(), 4);
        }
        
        agregarCredenciales(register.getCI(), register.getNombreUsuario(), register.getPassword());
    }

    // Metodo para traer la lista de paises
    public List<Pais> listaPaises(){
        List<Pais> paises = jdbcTemplate.query(new PreparedStatementCreator(){
            @Override
            public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
                PreparedStatement ps = con.prepareStatement("SELECT paisID, paisNombre FROM Pais");
                return ps;
            }
        }, new ResultSetExtractor <List<Pais>>(){
            @Override
            public List<Pais> extractData(ResultSet rs) throws SQLException {
                List<Pais> paisLista = new ArrayList<>();
                while (rs.next()){
                    Pais pais = new Pais(rs.getInt("paisID"), rs.getString("paisNombre"));
                    paisLista.add(pais);
                } 
                return paisLista;
            }
        });
        if(paises != null){
            return paises;
        }else{
            return null;
        }
    }

    // Metodo para traer la lista de ciudades
    public void listaCiudades(){

    }

    private void agregarTipo(String ci, Integer tipo, String motivo){
        jdbcTemplate.update(
            "INSERT INTO UsuarioTipoUsuario (CI, tipoUsuarioID, motivo) VALUES (?, ?, ?)", 
            ci, tipo, motivo 
        );
    }

    private void agregarEstado(String ci, Integer tipo){
        jdbcTemplate.update(
            "INSERT INTO UsuarioEstadoUsuario (tipoEstado, CI) VALUES (?, ?)", 
            tipo, ci
        );
    }

    private void agregarCredenciales(String ci, String userName, String userPassword){
        jdbcTemplate.update(
            "INSERT INTO UsuarioCredenciales (CI, nombreUsuario, password) VALUES (?, ?, ?)", 
            ci, userName, userPassword
        );
    }
    
}
