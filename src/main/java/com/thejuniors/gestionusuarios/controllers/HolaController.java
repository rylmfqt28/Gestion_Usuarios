package com.thejuniors.gestionusuarios.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HolaController {
    @RequestMapping("/")
    public String hola() {
        return "** API THEJUNIORS **";
    }
}