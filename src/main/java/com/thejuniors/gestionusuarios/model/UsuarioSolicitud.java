package com.thejuniors.gestionusuarios.model;

public class UsuarioSolicitud {
   private String ci;
   private String nombre;
   private String apellido;
   private String estadoUsuario;
   private String tipoUsuario;
   

   private String correo;
   private String telefono;
   private String paisNombre;
   private String ciudadNombre;
   private String nombreUsuario;
   private String motivo;

    public UsuarioSolicitud() {
       ci="";
       nombre="";
       apellido="";
       estadoUsuario="";
       tipoUsuario = "";
       correo = "";
       this.telefono = "";
       paisNombre = "";
       ciudadNombre = "";
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
    
    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo= correo;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getCiudadNombre() {
        return ciudadNombre;
    }

    public void setCiudadNombre(String ciudadNombre) {
        this.ciudadNombre = ciudadNombre;
    }

    public String getPaisNombre() {
        return paisNombre;
    }

    public void setPaisNombre(String paisNombre) {
        this.paisNombre = paisNombre;
    }

    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public void setNombreUsuario(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }

    public String getMotivo() {
        return motivo;
    }

    public void setMotivo(String motivo) {
        this.motivo = motivo;
    }
 }
