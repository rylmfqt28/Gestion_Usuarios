package com.thejuniors.gestionusuarios.model;

public class Permisos {
    
    private Integer permisoId;
    private String nombrePermiso;
    private String permisoDescripcion;

    public Permisos(Integer permisoId, String nombrePermiso, String permisoDescripcion) {
        this.permisoId = permisoId;
        this.nombrePermiso = nombrePermiso;
        this.permisoDescripcion = permisoDescripcion;
    }

    public Integer getPermisoId() {
        return permisoId;
    }

    public void setPermisoId(Integer permisoId) {
        this.permisoId = permisoId;
    }

    public String getNombrePermiso() {
        return nombrePermiso;
    }

    public void setNombrePermiso(String nombrePermiso) {
        this.nombrePermiso = nombrePermiso;
    }

    public String getPermisoDescripcion() {
        return permisoDescripcion;
    }

    public void setPermisoDescripcion(String permisoDescripcion) {
        this.permisoDescripcion = permisoDescripcion;
    }

}
