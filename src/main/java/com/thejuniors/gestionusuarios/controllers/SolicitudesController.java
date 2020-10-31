package com.thejuniors.gestionusuarios.controllers;

import com.google.gson.Gson;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.thejuniors.gestionusuarios.services.SolicitudeService;
import com.thejuniors.gestionusuarios.model.UsuarioSolicitud;

import java.util.List;


//LLamar y dar rutas a las solicitudes para SolicitudesService
@RestController
public class SolicitudesController {
    @Autowired
    SolicitudeService loginservice;

    @Autowired
    Gson gson;

    @GetMapping(value="/api/listaSolicitud/{tipoUsuarioNombre}/{nombreEstado}", produces={"application/json"})
    public List<UsuarioSolicitud> login(@PathVariable("tipoUsuarioNombre") String tipoUsuarioNombre, @PathVariable("nombreEstado") String nombreEstado) {
        return loginservice.enlistarSolicitudes(tipoUsuarioNombre, nombreEstado);
    }
    
}
