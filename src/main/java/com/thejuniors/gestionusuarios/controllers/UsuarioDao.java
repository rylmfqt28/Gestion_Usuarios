package com.thejuniors.gestionusuarios.controllers;

import java.util.Optional;

import com.thejuniors.gestionusuarios.model.Usuario;

import org.hibernate.mapping.List;
import org.springframework.data.repository.CrudRepository;

public interface UsuarioDao  extends CrudRepository<Usuario,String>{
    
}