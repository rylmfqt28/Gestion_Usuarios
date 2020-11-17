package com.thejuniors.gestionusuarios.controllers;

import com.thejuniors.gestionusuarios.services.AdminPermisosService;
import com.thejuniors.gestionusuarios.model.Permisos;
import com.thejuniors.gestionusuarios.model.UsuarioPermisos;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.POST, RequestMethod.GET, RequestMethod.DELETE})
public class AdminPermisosController {
    
    @Autowired
    private AdminPermisosService adminPermiso;

    // Lista de todos los permisos que existen
    @GetMapping(value="/api/listarPermisos", produces={"application/json"})
    public List<Permisos> listarPermisos(){
        return adminPermiso.listaPermisos();
    }

    // Lista de permisos que tiene asignado un tipo de usuario 
    @GetMapping(value="/api/listarPermisosUsuario/{tipoUsuarioNombre}", produces={"application/json"})
    public List<Permisos> listarPermisosAsignadosUsuario(@PathVariable("tipoUsuarioNombre") String tipoUsuarioNombre){
        return adminPermiso.listaPermisosUsaurio(tipoUsuarioNombre.replace("+", " "));
    }

    // Lista de permisos que no tiene asignado un tipo de usuario
    @GetMapping(value="/api/listarPermisosNoUsuario/{tipoUsuarioNombre}", produces={"application/json"})
    public List<Permisos> listarPermisosNoAsignadosUsuario(@PathVariable("tipoUsuarioNombre") String tipoUsuarioNombre){
        return adminPermiso.listaPermisosNoUsaurio(tipoUsuarioNombre.replace("+", " "));
    }

    // Añadir un permiso a un tipo de usuario
    @PostMapping(value = "/api/asignarPermiso", consumes={"application/json"})
    public void agregarPermiso(@RequestBody UsuarioPermisos userp){
        adminPermiso.asignarPermiso(userp.getTipoUsuarioId(), userp.getPermisoId());
    }

    // Quitar un permiso a un usuario
    @DeleteMapping(value="/api/quitarPermiso/{tipoUsuarioId}/{permisoId}", produces={"application/json"})
    public void  quitarUnPermiso(@PathVariable("tipoUsuarioId") Integer tipoUsuarioId, @PathVariable("permisoId") Integer permisoId){
        adminPermiso.quitarPermiso(tipoUsuarioId, permisoId);
    }

}
