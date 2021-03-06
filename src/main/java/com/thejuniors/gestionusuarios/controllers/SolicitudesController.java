package com.thejuniors.gestionusuarios.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PutMapping;

import org.springframework.web.bind.annotation.RestController;

import com.thejuniors.gestionusuarios.services.DatosTipoUser;
import com.thejuniors.gestionusuarios.services.SolicitudeService;
import com.thejuniors.gestionusuarios.model.CrearTipo;
import com.thejuniors.gestionusuarios.model.UsuarioSolicitud;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;


//LLamar y dar rutas a las solicitudes para SolicitudesService
@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.PUT})
public class SolicitudesController {
    
    @Autowired
    SolicitudeService solicitudes;

    @Autowired
    DatosTipoUser datosTipo;
    
    @GetMapping(value="/api/listaSolicitud/{tipoUsuarioNombre}/{nombreEstado}", produces={"application/json"})
    public List<UsuarioSolicitud> login(@PathVariable("tipoUsuarioNombre") String tipoUsuarioNombre, @PathVariable("nombreEstado") String nombreEstado) {
        return solicitudes.enlistarSolicitudes(tipoUsuarioNombre.replace("+", " "), nombreEstado);
    }

    @GetMapping(value="/api/listaTipos", produces={"application/json"})
    public List<CrearTipo> listar(){
        return datosTipo.enlistarSolicitudes();
    }
    /*@PutMapping(value = "/api/cambio", consumes={"application/json"})
    public void insertar(@RequestBody UsuarioEstadoUsuario tipo)
    {
        solicitudes.actualizarEstado(tipo.getTipoEstado(),tipo.getCI());
    }*/
    @PutMapping(value = "/api/cambio/{CI}/{tipo}", produces = {"application/json"})
    public void insertar(@PathVariable("CI") String CI, @PathVariable("tipo") String tipo)
    {
        solicitudes.actualizarEstado(CI, tipo);
    }

    }
