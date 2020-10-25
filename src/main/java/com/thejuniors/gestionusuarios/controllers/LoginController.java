package com.thejuniors.gestionusuarios.controllers;

import com.google.gson.Gson;
import com.thejuniors.gestionusuarios.services.LoginService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
    
    @Autowired
    LoginService loginservice;

    @Autowired
    Gson gson;

    @GetMapping(value="/api/user/{nombreUsuario}", produces={"application/json"})
    public String login(@PathVariable("nombreUsuario") String nombreUsuario){
        return gson.toJson(loginservice.buscarUsuario(nombreUsuario));
    }

}
