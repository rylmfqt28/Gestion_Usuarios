package com.thejuniors.gestionusuarios.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;


@Entity
@Table(name = "TipoUsuario", uniqueConstraints= { @UniqueConstraint(columnNames = {"tipoUsuarioID"})})
public class TipoUsuario {
    @Id
    private String tipoUsuarioID;

    private String tipoUsuarioNombre;

    private String tipoUsuarioDescripcion;

    
    public String getId(){
        return tipoUsuarioID;
    }
    
    public void setCI(String id){
        this.tipoUsuarioID = id
        ;
    }

    public String getNombreUs(){
        return tipoUsuarioNombre;
    }
    
    public void setNombreUs(String nombre){
        this.tipoUsuarioNombre =  nombre;
    }

    public String getDescripcionUs(){
        return tipoUsuarioDescripcion;
    }
    
    public void setDescripcionUs(String descripcion){
        this.tipoUsuarioDescripcion =  descripcion;
    }

    
}