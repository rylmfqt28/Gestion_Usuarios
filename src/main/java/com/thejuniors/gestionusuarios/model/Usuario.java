package com.thejuniors.gestionusuarios.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;


@Entity
@Table(name = "Usuario", uniqueConstraints= { @UniqueConstraint(columnNames = {"CI"})})
public class Usuario {
    @Id
    private String CI;

    private String usuarioNombre;

    private String usuarioApellido;

    private String paisID;

    private String ciudadID;

    private String  correo;

    private String telefono;
    
    public String getCI(){
        return CI;
    }
    
    public void setCI(String ci){
        this.CI = ci
        ;
    }

    public String getNombre(){
        return usuarioNombre;
    }
    
    public void setNombre(String nombre){
        this.usuarioNombre =  nombre;
    }

    public String getApellido(){
        return usuarioApellido;
    }
    
    public void setApellido(String apellido){
        this.usuarioApellido =  apellido;
    }

    public String getPaisID(){
        return paisID;
    }
    
    public void setPaisID(String pais){
        this.paisID = pais;
    }

    public String getCiudadID(){
        return ciudadID;
    }
    
    public void setCuidadID(String ciudad){
        this.ciudadID=ciudad;
    }

    public String getCorreo(){
        return correo;
    }
    
    public void setCorreo(String correo){
        this.correo=correo;
    }

    public String getTelefono(){
        return telefono;
    }
    
    public void setTelefono(String telefono){
        this.telefono=telefono;
    }
}