package com.thejuniors.gestionusuarios.services;

import com.thejuniors.gestionusuarios.model.Register;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class RegisterService {

    @Autowired		
    private JdbcTemplate jdbcTemplate;

    public void agregarUsuario(Register register){

        jdbcTemplate.update(
            "INSERT INTO Usuario (CI, usuarioNombre, usuarioApellido, paisID, ciudadID, direccion, correo, telefono, genero VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?))", 
            register.getCI(), register.getUsuarioNombre(), register.getUsuarioApellido(), register.getPaisID(), 
            register.getCuidadID(), register.getDireccion(), register.getCorreo(), register.getTelefono(), register.getTelefono() 
        );
        
        agregarTipo(register.getCI(), register.getTipoUsuarioID(), register.getMotivo());
        agregarEstado(register.getCI());
        agregarCredenciales(register.getCI(), register.getNombreUsuario(), register.getPassword());
    }

    private void agregarTipo(String ci, String tipo, String motivo){
        jdbcTemplate.update(
            "INSERT INTO UsuarioTipoUsuario (CI, tipoUsuarioID, motivo) VALUES (?, ?, ?)", 
            ci, tipo, motivo 
        );
    }

    private void agregarEstado(String ci){

    }

    private void agregarCredenciales(String ci, String userName, String userPassword){}
    
}
