package com.thejuniors.gestionusuarios.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

import com.thejuniors.gestionusuarios.model.UserData;
import com.thejuniors.gestionusuarios.services.UserListService;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET})
public class UserListController {

    @Autowired
    UserListService userServices;

    // Devuelve lista de todos los usuarios
    @GetMapping(value="/api/allUsers", produces={"application/json"})
    public List<UserData> listarPermisos(){
        return userServices.allUsers();
    }
    
    // Devuelve la lista de los usuarios que pertenescan a un tipo de usuario determinado
    @GetMapping(value="/api/userListOf/{tipoUsuarioNombre}", produces={"application/json"})
    public List<UserData> listarPermisosAsignadosUsuario(@PathVariable("tipoUsuarioNombre") String tipoUsuarioNombre){
        return userServices.usersListOf(tipoUsuarioNombre.replace("+", " "));
    }
}
