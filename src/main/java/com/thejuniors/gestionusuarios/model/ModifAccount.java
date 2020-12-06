package com.thejuniors.gestionusuarios.model;

public class ModifAccount {

    private String usuarioNombre;
    private String usuarioApellido;
    private String CI;
    private Integer paisID;
    private Integer ciudadID;
    private String direccion;
    private String correo;
    private String telefono;
    private String nombreUsuario;
    private String password;

    // Constructor para modificar la informacion de un usuario en la BD
    public ModifAccount(String usuarioNombre, String usuarioApellido, String CI, Integer paisID, Integer ciudadID,
            String direccion, String correo, String telefono, String nombreUsuario, String password) {
        this.usuarioNombre = usuarioNombre;
        this.usuarioApellido = usuarioApellido;
        this.CI = CI;
        this.paisID = paisID;
        this.ciudadID = ciudadID;
        this.direccion = direccion;
        this.correo = correo;
        this.telefono = telefono;
        this.nombreUsuario = nombreUsuario;
        this.password = password;
    }

    // constructor para modificar la contraseña de un usuario en la BD
    public ModifAccount(String CI, String password){
        this.CI = CI;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
