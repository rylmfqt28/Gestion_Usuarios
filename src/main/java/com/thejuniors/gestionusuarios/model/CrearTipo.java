package com.thejuniors.gestionusuarios.model;

public class CrearTipo {
    private Integer tipoUsuarioID;
    private String crearTipo;
    private String descripcionTipo;

    public CrearTipo(){
        
    }

    public CrearTipo(String crearTipo,String descTipo){
        this.crearTipo = crearTipo;
        this.descripcionTipo = descTipo;
    }

    public CrearTipo(Integer tipoUsuarioID, String crearTipo,String descTipo){
        this.tipoUsuarioID = tipoUsuarioID;
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

    public Integer getTipoUsuarioID() {
        return tipoUsuarioID;
    }

    public void setTipoUsuarioId(Integer tipoUsuarioID) {
        this.tipoUsuarioID = tipoUsuarioID;
    }
    
}
