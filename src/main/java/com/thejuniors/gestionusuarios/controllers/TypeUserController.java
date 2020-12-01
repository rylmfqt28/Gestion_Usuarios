package com.thejuniors.gestionusuarios.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

import com.thejuniors.gestionusuarios.model.CrearTipo;
import com.thejuniors.gestionusuarios.services.TypeUserService;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.PUT, RequestMethod.DELETE})
public class TypeUserController {
    
    @Autowired
    TypeUserService typeUserService;

    // Devuelve la lista de todos los tipos de usuario existentes
    @GetMapping(value="/api/allTypeUsers", produces={"application/json"})
    public List<CrearTipo> getListTypeUser(){
        return typeUserService.allTypeUsers();
    }

}
