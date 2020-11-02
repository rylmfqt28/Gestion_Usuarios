package com.thejuniors.gestionusuarios.model;

public class UsuarioEstadoUsuario {
    private Integer tipoEstado;
    //private String CI;

    public UsuarioEstadoUsuario(Integer tipoEstado) {
        this.tipoEstado = tipoEstado;
        //this.CI = CI;
    }

    public Integer getTipoEstado() {
        return tipoEstado;
    }

    public void setTipoEstado(Integer tipoEstado) {
        this.tipoEstado = tipoEstado;
    }

   /* public String getCI() {
        return CI;
    }*/

   /* public void setCI(String CI) {
        this.CI = CI;
    }*/

   

    
}
