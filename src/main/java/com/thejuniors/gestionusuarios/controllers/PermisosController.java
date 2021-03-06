package com.thejuniors.gestionusuarios.controllers;

import com.google.gson.Gson;
import com.thejuniors.gestionusuarios.model.EditPermiso;
import com.thejuniors.gestionusuarios.model.Permisos;
import com.thejuniors.gestionusuarios.services.PermisosService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

    // Inserta un nuevo permiso en la tabla PErmisos de la BD
    @PostMapping(value = "/api/nuevoPermiso", consumes={"application/json"})
    public void insertarPermiso(@RequestBody EditPermiso edtPermiso){
       permisos.nuevoPermiso(edtPermiso);
    }


    // Actualiza el nombre y descripcion de un permiso mediante su id
    @PutMapping(value = "/api/actualizarPermiso/{permisoId}", consumes = {"application/json"})
    public void actualizarPermiso(@PathVariable("permisoId") Integer permisoId, @RequestBody EditPermiso edtPermiso){
        permisos.updatePermiso(new Permisos(permisoId, edtPermiso.getNombrePermiso(), edtPermiso.getPermisoDescripcion()));
    }

    // Eliminar un permiso funcion trash del frontend
    @DeleteMapping(value="/api/eliminarPermiso/{permisoId}", produces={"application/json"})
    public void eliminarPermiso(@PathVariable("permisoId") Integer permisoId){
        permisos.deletePermiso(permisoId);
    }

}
