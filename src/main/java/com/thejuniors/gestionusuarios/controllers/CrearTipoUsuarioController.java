package com.thejuniors.gestionusuarios.controllers;

import com.google.gson.Gson;
import com.thejuniors.gestionusuarios.services.CrearTipoUsuarioService;
import com.thejuniors.gestionusuarios.model.CrearTipo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;


@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST})
public class CrearTipoUsuarioController {
    @Autowired
    CrearTipoUsuarioService creado;

    @Autowired
    Gson gson;

    @PostMapping(value = "/api/type", consumes={"application/json"})
    public void insertar(@RequestBody CrearTipo tipo)
    {
        creado.crearTipo(tipo.getCrearTipo(),tipo.getDescripcionTipo());
    }

    @RequestMapping(value = "/api/type/{getTipo}", produces={"application/json"})
    public String crearTipo(@PathVariable("getTipo") String getTipo){
        return gson.toJson(creado.existeTipo(getTipo));
    }


}




    



