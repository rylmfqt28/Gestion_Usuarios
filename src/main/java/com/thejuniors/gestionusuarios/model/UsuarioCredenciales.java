package com.thejuniors.gestionusuarios.model;

public class UsuarioCredenciales {

    private String CI;
    private String nombreUsuario;
    private String password;
    private String tipoUsuarioNombre;
    private String nombreEstado;

    public UsuarioCredenciales(){
    }

    public UsuarioCredenciales(String CI, String nombreUsuario, String password, String tipoUsuarioNombre, String nombreEstado){
        super();
        this.CI = CI;
        this.nombreUsuario = nombreUsuario;
        this.password = password;
        this.tipoUsuarioNombre = tipoUsuarioNombre;
        this.nombreEstado = nombreEstado;
    }

    public String getCI(){
        return CI;
    }

    public void setCI(String CI){
        this.CI = CI;
    }

    public String getNombreUsuario(){
        return nombreUsuario;
    }

    public void setNombreUsuario(String nombreUsuario){
        this.nombreUsuario = nombreUsuario;
    }

    public String getPassword(){
        return password;
    }

    public void setPassword(String password){
        this.password = password;
    }

    public String getTipoUsuarioNombre(){
        return tipoUsuarioNombre;
    }

    public void setTipoUsuarioNombre(String tipoUsuarioNombre){
        this.tipoUsuarioNombre = tipoUsuarioNombre;
    }

    public String getNombreEstado(){
        return nombreEstado;
    }

    public void setNombreEstado(String nombreEstado){
        this.nombreEstado = nombreEstado;
    }
}
