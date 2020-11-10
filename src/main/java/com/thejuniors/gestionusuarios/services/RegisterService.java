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

    }

    private void agregarTipo(String ci){

    }

    private void agregarEstado(String ci){

    }

    private void agregarCredenciales(){}
    
}
