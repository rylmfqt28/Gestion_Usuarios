package com.thejuniors.gestionusuarios.model;

public class UsuarioCredenciales {

    private Integer CI;
    private String nombreUsuario;
    private String password ;

    public UsuarioCredenciales(){
    }

    public UsuarioCredenciales(Integer CI, String nombreUsuario, String password){
        super();
        this.CI = CI;
        this.nombreUsuario = nombreUsuario;
        this.password = password;
    }

    public Integer getCI(){
        return CI;
    }

    public void setCI(Integer CI){
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

}
