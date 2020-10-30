package com.thejuniors.gestionusuarios.model;

public class CrearTipo {
    private String crearTipo;
    private String descripcionTipo;

    public CrearTipo(){
        
    }

    public CrearTipo(String crearTipo,String descTipo){
        this.crearTipo = crearTipo;
        this.descripcionTipo = descTipo;
    }

    public String getCrearTipo() {
        return crearTipo;
    }

    public void setCrearTipo(String crearTipo) {
        this.crearTipo = crearTipo;
    }

    public String getDescripcionTipo() {
        return descripcionTipo;
    }

    public void setDescripcionTipo(String descripcionTipo) {
        this.descripcionTipo = descripcionTipo;
    }
    
}
