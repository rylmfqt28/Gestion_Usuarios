package com.thejuniors.gestionusuarios.model;

public class Account {

    private String usuarioNombre;
    private String usuarioApellido;
    private String CI;
    private String paisNombre;
    private String ciudadNombre;
    private String direccion;
    private String correo;
    private String telefono;
    private String nombreUsuario;
    private String password;

    public Account(String usuarioNombre, String usuarioApellido, String CI, String paisNombre, String ciudadNombre,
            String direccion, String correo, String telefono, String nombreUsuario, String password) {
        this.usuarioNombre = usuarioNombre;
        this.usuarioApellido = usuarioApellido;
        this.CI = CI;
        this.paisNombre = paisNombre;
        this.ciudadNombre = ciudadNombre;
        this.direccion = direccion;
        this.correo = correo;
        this.telefono = telefono;
        this.nombreUsuario = nombreUsuario;
        this.password = password;
    }

    public String getUsuarioNombre() {
        return usuarioNombre;
    }

    public void setUsuarioNombre(String usuarioNombre) {
        this.usuarioNombre = usuarioNombre;
    }

    public String getUsuarioApellido() {
        return usuarioApellido;
    }

    public void setUsuarioApellido(String usuarioApellido) {
        this.usuarioApellido = usuarioApellido;
    }

    public String getCI() {
        return CI;
    }

    public void setCI(String CI) {
        this.CI = CI;
    }

    public String getPaisNombre() {
        return paisNombre;
    }

    public void setPaisNombre(String paisNombre) {
        this.paisNombre = paisNombre;
    }

    public String getCiudadNombre() {
        return ciudadNombre;
    }

    public void setCiudadNombre(String ciudadNombre) {
        this.ciudadNombre = ciudadNombre;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public void setNombreUsuario(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
}
