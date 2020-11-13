package com.thejuniors.gestionusuarios.model;

public class UsuarioPermisos {
    
    private Integer tipoUsuarioId;
    private Integer permisoId;

    public UsuarioPermisos(Integer tipoUsuarioId, Integer permisoId) {
        this.tipoUsuarioId = tipoUsuarioId;
        this.permisoId = permisoId;
    }

    public Integer getTipoUsuarioId() {
        return tipoUsuarioId;
    }

    public void setTipoUsuarioId(Integer tipoUsuarioId) {
        this.tipoUsuarioId = tipoUsuarioId;
    }

    public Integer getPermisoId() {
        return permisoId;
    }

    public void setPermisoId(Integer permisoId) {
        this.permisoId = permisoId;
    }

}
