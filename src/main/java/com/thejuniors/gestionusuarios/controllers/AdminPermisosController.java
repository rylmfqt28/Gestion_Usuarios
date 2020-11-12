package com.thejuniors.gestionusuarios.controllers;

import com.thejuniors.gestionusuarios.services.AdminPermisosService;
import com.thejuniors.gestionusuarios.model.Permisos;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.POST, RequestMethod.GET, RequestMethod.DELETE, RequestMethod.PUT})
public class AdminPermisosController {
    
    @Autowired
    private AdminPermisosService adminPermiso;

    @GetMapping(value="/api/listarPermisos", produces={"application/json"})
    public List<Permisos> listarPermisos(){
        return adminPermiso.listaPermisos();
    }

    @GetMapping(value="/api/listarPermisosUsuario/{tipoUsuarioNombre}", produces={"application/json"})
    public List<Permisos> listarPermisosAsignadosUsuario(@PathVariable("tipoUsuarioNombre") String tipoUsuarioNombre){
        return adminPermiso.listaPermisosUsaurio(tipoUsuarioNombre.replace("+", " "));
    }

    @GetMapping(value="/api/listarPermisosNoUsuario/{tipoUsuarioNombre}", produces={"application/json"})
    public List<Permisos> listarPermisosNoAsignadosUsuario(@PathVariable("tipoUsuarioNombre") String tipoUsuarioNombre){
        return adminPermiso.listaPermisosNoUsaurio(tipoUsuarioNombre.replace("+", " "));
    }

    @PostMapping(value = "/api/asignarPermiso", consumes={"application/json"})
    public void agregarPermiso(){}

}
