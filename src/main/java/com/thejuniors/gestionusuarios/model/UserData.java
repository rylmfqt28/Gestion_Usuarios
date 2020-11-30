package com.thejuniors.gestionusuarios.model;

public class UserData {
    
    private String usuarioNombre;
    private String usuarioApellido;
    private String CI;
    private String paisNombre;
    private String ciudadNombre;
    private String direccion;
    private String correo;
    private String telefono;
    private String nombreUsuario;
    private String tipoUsuarioNombre;

    public UserData(String usuarioNombre, String usuarioApellido, String CI, String paisNombre, String ciudadNombre,
            String direccion, String correo, String telefono, String nombreUsuario, String tipoUsuarioNombre) {
        this.usuarioNombre = usuarioNombre;
        this.usuarioApellido = usuarioApellido;
        this.CI = CI;
        this.paisNombre = paisNombre;
        this.ciudadNombre = ciudadNombre;
        this.direccion = direccion;
        this.correo = correo;
        this.telefono = telefono;
        this.nombreUsuario = nombreUsuario;
        this.tipoUsuarioNombre = tipoUsuarioNombre;
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

    public String getPaisID() {
        return paisNombre;
    }

    public void setPaisID(String paisNombre) {
        this.paisNombre = paisNombre;
    }

    public String getciudadNombre() {
        return ciudadNombre;
    }

    public void setciudadNombre(String ciudadNombre) {
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

    public String gettipoUsuarioNombre() {
        return tipoUsuarioNombre;
    }

    public void settipoUsuarioNombre(String tipoUsuarioNombre) {
        this.tipoUsuarioNombre = tipoUsuarioNombre;
    }
    
}
