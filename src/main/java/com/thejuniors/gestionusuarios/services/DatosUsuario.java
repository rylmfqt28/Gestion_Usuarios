package com.thejuniors.gestionusuarios.services;

import java.io.Console;
import java.util.Optional;

import com.thejuniors.gestionusuarios.controllers.UsuarioDao;
import com.thejuniors.gestionusuarios.model.Usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;




@Controller
@RequestMapping("/persona")
@CrossOrigin("*")
public class DatosUsuario{
    
    @Autowired
    private UsuarioDao userdao;
    
    @GetMapping("/lista")
    public @ResponseBody Iterable<Usuario> lista() {
        return userdao.findAll();
    }

    @GetMapping("obtener/{ci}")
    public @ResponseBody Optional<Usuario> obtener(@PathVariable("ci") String ci) {
        return userdao.findById(ci);
    }

    /*@GetMapping("obtener/{id}")
    public java.util.Optional<Usuario> obtener(@PathVariable("id") String id) {
        return userdao.findByPaisID(id);
    }*/

    @DeleteMapping("eliminar/{id}")
    public void eliminar(@PathVariable("id") String id){
        userdao.deleteById(id);
    }

    @PostMapping("guardar")
    public void guardar(@RequestBody Usuario user){
        userdao.save(user);
    }

    @GetMapping("dato/{id}")
    public @ResponseBody Optional<Usuario> dato(@PathVariable("id") String id){
        return userdao.findById(id);
    }
}