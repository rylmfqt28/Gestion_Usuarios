package com.thejuniors.gestionusuarios.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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

    @GetMapping(value="/api/allUsers", produces={"application/json"})
    public List<UserData> listarPermisos(){
        return userServices.allUsers();
    }
    
}
