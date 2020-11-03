package com.thejuniors.gestionusuarios.services;
import java.util.Optional;
import com.thejuniors.gestionusuarios.controllers.TipoUsuarioDao;
import com.thejuniors.gestionusuarios.model.TipoUsuario;
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





@Controller
@RequestMapping("/tipousuario")
@CrossOrigin("*")
public class DatosTipoUser{
    
    @Autowired
    private TipoUsuarioDao tipouserdao;
    
    @GetMapping("/lista")
    public @ResponseBody Iterable<TipoUsuario> lista() {
        return tipouserdao.findAll();
    }

    @GetMapping("obtener/{tipoUsuarioID}")
    public @ResponseBody Optional<TipoUsuario> obtener(@PathVariable("tipoUsuarioID") String tipoUsuarioID) {
        return tipouserdao.findById(tipoUsuarioID);
    }

    /*@GetMapping("obtener/{id}")
    public java.util.Optional<Usuario> obtener(@PathVariable("id") String id) {
        return userdao.findByPaisID(id);
    }*/

    @DeleteMapping("eliminar/{tipoUsuarioID}")
    public void eliminar(@PathVariable("tipoUsuarioID") String tipoUsuarioID){
        tipouserdao.deleteById(tipoUsuarioID);
    }

    @PostMapping("guardar")
    public void guardar(@RequestBody TipoUsuario tipoUsuarioID){
        tipouserdao.save(tipoUsuarioID);
    }

    @GetMapping("dato/{id}")
    public @ResponseBody Optional<TipoUsuario> dato(@PathVariable("tipoUsuarioID") String tipoUsuarioID){
        return tipouserdao.findById(tipoUsuarioID);
    }
}