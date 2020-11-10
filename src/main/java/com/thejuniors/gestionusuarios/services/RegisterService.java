package com.thejuniors.gestionusuarios.services;

import com.thejuniors.gestionusuarios.model.Register;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

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
