package com.thejuniors.gestionusuarios.controllers;

import java.util.List;

import com.thejuniors.gestionusuarios.model.Ciudad;
import com.thejuniors.gestionusuarios.model.Pais;
import com.thejuniors.gestionusuarios.model.Register;
import com.thejuniors.gestionusuarios.services.RegisterService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.POST, RequestMethod.GET})
public class RegisterController {
    
    @Autowired
    RegisterService registerService;

    @PostMapping(value = "/api/nuevoUsuario", consumes={"application/json"})
    public void nuevoUsuario(@RequestBody Register newRegister){
        registerService.agregarUsuario(newRegister);
    }

    @GetMapping(value="/api/listaPaises", produces={"application/json"})
    public List<Pais> listarPaises(){
        return registerService.listaPaises();
    }

    @GetMapping(value="/api/listaCiudades/{paisNombre}", produces={"application/json"})
    public List<Ciudad> listarCiudades(@PathVariable("paisNombre") String paisNombre){
        return registerService.listaCiudades(paisNombre);
    }

}
