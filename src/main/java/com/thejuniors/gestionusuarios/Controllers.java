package com.thejuniors.gestionusuarios;	
import java.util.ArrayList;	
import java.util.List;	
import java.util.Map;	
import org.springframework.beans.factory.annotation.Autowired;	
import org.springframework.jdbc.core.JdbcTemplate;	
import org.springframework.web.bind.annotation.GetMapping;	
import org.springframework.web.bind.annotation.RestController;


import org.springframework.web.bind.annotation.PathVariable;	

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;


@RestController	
public class Controllers {	
    @Autowired		
    private JdbcTemplate jdbcTemplate;	
	public List<String> getAllSingers(){			
        String sql = "select * from Usuario";			
        List<Map<String, Object>> listMapQuery = jdbcTemplate.queryForList(sql);			
        List<String> singerList = new ArrayList<>();			
        listMapQuery.forEach(singer -> singerList.add(singer.toString()));			
        return singerList;		
    }	
    @GetMapping("/")		
    public List<String> query() {			
        return getAllSingers();		
    }	

    @GetMapping("/api/{nombreUsuario}")
    public List<String> query(@PathVariable("nombreUsuario") String nombreUsuario) {			
    
        //PreparedStatement ps = con.prepareStatement("select * from UsuarioCredenciales where nombreUsuario=?");
        //ps.setString(1, nombreUsuario);
        //ResultSet rs = ps.executeQuery();
        	
        String sql = "select * from UsuarioCredenciales where nombreUsuario='" + nombreUsuario + "'";			
        List<Map<String, Object>> listMapQuery = jdbcTemplate.queryForList(sql);			
        List<String> singerList = new ArrayList<>();			
        listMapQuery.forEach(singer -> singerList.add(singer.toString()));			
        return singerList;
        	
    }
}