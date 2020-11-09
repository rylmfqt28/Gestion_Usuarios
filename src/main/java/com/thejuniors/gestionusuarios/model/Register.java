package com.thejuniors.gestionusuarios.model;

public class Register {
    
    // info
    private String usuarioNombre;
    private String usuarioApellido;
    private String CI;
    private String genero;
    private Integer paisID;
    private Integer cuidadID;
    private String direccion;
    private String correo;
    private String telefono;
    
    // credenciales
    private String nombreUsuario;
    private String password;

    // usuario no cliente
    private String motivo;

    public Register(String usuarioNombre, String usuarioApellido, String cI, String genero, Integer paisID,
            Integer cuidadID, String direccion, String correo, String telefono, String nombreUsuario, String password) {
        this.usuarioNombre = usuarioNombre;
        this.usuarioApellido = usuarioApellido;
        CI = cI;
        this.genero = genero;
        this.paisID = paisID;
        this.cuidadID = cuidadID;
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

    public void setCI(String cI) {
        CI = cI;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public Integer getPaisID() {
        return paisID;
    }

    public void setPaisID(Integer paisID) {
        this.paisID = paisID;
    }

    public Integer getCuidadID() {
        return cuidadID;
    }

    public void setCuidadID(Integer cuidadID) {
        this.cuidadID = cuidadID;
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

    public void setMotivo(String motivo){
        this.motivo = motivo;
    }

    public String getMotivo() {
        return motivo;
    }

}
