package com.thejuniors.gestionusuarios.controllers;

import com.google.gson.Gson;
import com.thejuniors.gestionusuarios.services.UserDatos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET})
public class GetUsuarioAdmin {
    
    @Autowired
    UserDatos UserDatos;

    @Autowired
    Gson gson;

    @GetMapping(value="/api/admin/{ci}", produces={"application/json"})
    public String login(@PathVariable("ci") String ci){
        return gson.toJson(UserDatos.buscarUsuario(ci));
    }
    


}
