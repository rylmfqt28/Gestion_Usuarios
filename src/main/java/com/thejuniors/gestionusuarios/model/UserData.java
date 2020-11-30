package com.thejuniors.gestionusuarios.model;

public class UserData {
    
    private String usuarioNombre;
    private String usuarioApellido;
    private Integer CI;
    private Integer paisID;
    private Integer ciudadID;
    private String direccion;
    private String correo;
    private String telefono;
    private String nombreUsuario;
    private Integer tipoUsuaioID;

    public UserData(String usuarioNombre, String usuarioApellido, Integer CI, Integer paisID, Integer ciudadID,
            String direccion, String correo, String telefono, String nombreUsuario, Integer tipoUsuaioID) {
        this.usuarioNombre = usuarioNombre;
        this.usuarioApellido = usuarioApellido;
        this.CI = CI;
        this.paisID = paisID;
        this.ciudadID = ciudadID;
        this.direccion = direccion;
        this.correo = correo;
        this.telefono = telefono;
        this.nombreUsuario = nombreUsuario;
        this.tipoUsuaioID = tipoUsuaioID;
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

    public Integer getCI() {
        return CI;
    }

    public void setCI(Integer CI) {
        this.CI = CI;
    }

    public Integer getPaisID() {
        return paisID;
    }

    public void setPaisID(Integer paisID) {
        this.paisID = paisID;
    }

    public Integer getCiudadID() {
        return ciudadID;
    }

    public void setCiudadID(Integer ciudadID) {
        this.ciudadID = ciudadID;
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

    public Integer getTipoUsuaioID() {
        return tipoUsuaioID;
    }

    public void setTipoUsuaioID(Integer tipoUsuaioID) {
        this.tipoUsuaioID = tipoUsuaioID;
    }
    
}
