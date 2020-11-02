package com.thejuniors.gestionusuarios.model;

public class UsuarioSolicitud {
   private String ci;
   private String nombre;
   private String apellido;
   private String estadoUsuario;
   private String tipoUsuario;
   
    public UsuarioSolicitud() {
       
    }

    public UsuarioSolicitud(String ci, String nombre, String apellido, String estadoUsuario, String tipoUsuario) {
        this.ci = ci;
        this.nombre = nombre;
        this.apellido = apellido;
        this.estadoUsuario = estadoUsuario;
        this.tipoUsuario = tipoUsuario;
    }

    public String getCi() {
        return ci;
    }

    public void setCi(String ci) {
        this.ci = ci;
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

    public String getEstadoUsuario() {
        return estadoUsuario;
    }

    public void setEstadoUsuario(String estadoUsuario) {
        this.estadoUsuario = estadoUsuario;
    }

    public String getTipoUsuario() {
        return tipoUsuario;
    }

    public void setTipoUsuario(String tipoUsuario) {
        this.tipoUsuario = tipoUsuario;
    }
    

}
