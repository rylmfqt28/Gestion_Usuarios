package com.thejuniors.gestionusuarios.controllers;

import com.thejuniors.gestionusuarios.model.Register;
import com.thejuniors.gestionusuarios.services.RegisterService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.POST})
public class RegisterController {
    
    @Autowired
    RegisterService registerService;

    @PostMapping(value = "/api/nuevoUsuario", consumes={"application/json"})
    public void nuevoUsuario(@RequestBody Register newRegister){
        registerService.agregarUsuario(newRegister);
    }

}
