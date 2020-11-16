package com.thejuniors.gestionusuarios.model;

public class EditPermiso {

    private String nombrePermiso;
    private String permisoDescripcion;

    public EditPermiso(String nombrePermiso, String permisoDescripcion) {
        this.nombrePermiso = nombrePermiso;
        this.permisoDescripcion = permisoDescripcion;
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
