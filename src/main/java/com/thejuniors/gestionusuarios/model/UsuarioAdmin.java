package com.thejuniors.gestionusuarios.model;

public class UsuarioAdmin {
    private String CI;
    private String nombre;
    private String apellido;

    public UsuarioAdmin(String cI, String nombre, String apellido) {
        CI = cI;
        this.nombre = nombre;
        this.apellido = apellido;
    }

    public String getCI() {
        return CI;
    }

    public void setCI(String cI) {
        CI = cI;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }
    
}
