package com.thejuniors.gestionusuarios.controllers;
import com.thejuniors.gestionusuarios.model.TipoUsuario;
import org.springframework.data.repository.CrudRepository;

public interface TipoUsuarioDao  extends CrudRepository<TipoUsuario,String>{
    
}
