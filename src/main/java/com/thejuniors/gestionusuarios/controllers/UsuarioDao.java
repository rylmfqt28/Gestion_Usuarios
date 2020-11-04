package com.thejuniors.gestionusuarios.controllers;
import com.thejuniors.gestionusuarios.model.Usuario;
import org.springframework.data.repository.CrudRepository;



public interface UsuarioDao  extends CrudRepository<Usuario,String>{
    
}