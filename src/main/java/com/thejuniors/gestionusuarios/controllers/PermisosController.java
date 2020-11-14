package com.thejuniors.gestionusuarios.controllers;

import com.google.gson.Gson;
import com.thejuniors.gestionusuarios.services.PermisosService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.POST, RequestMethod.GET, RequestMethod.DELETE, RequestMethod.PUT})
public class PermisosController {
    
    @Autowired
    Gson gson;

    @Autowired
    PermisosService permisos;
    
    // Verifica si existe un permiso si existe devuelve los datos si no existe devuelve null
    @GetMapping(value="/api/permiso/{nombrePermiso}", produces={"application/json"})
    public String login(@PathVariable("nombrePermiso") String nombrePermiso){
        return gson.toJson(permisos.buscarPermiso(nombrePermiso.replace("+", " ")));
    }

}
