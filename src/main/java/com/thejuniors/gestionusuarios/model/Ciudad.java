package com.thejuniors.gestionusuarios.model;

public class Ciudad {

    private Integer ciudadID;
    private Integer paisID;
    private String ciudadNombre;

    public Ciudad(Integer ciudadID, Integer paisID, String ciudadNombre) {
        this.ciudadID = ciudadID;
        this.paisID = paisID;
        this.ciudadNombre = ciudadNombre;
    }

    public Integer getCiudadID() {
        return ciudadID;
    }

    public void setCiudadID(Integer ciudadID) {
        this.ciudadID = ciudadID;
    }

    public Integer getPaisID() {
        return paisID;
    }

    public void setPaisID(Integer paisID) {
        this.paisID = paisID;
    }

    public String getCiudadNombre() {
        return ciudadNombre;
    }

    public void setCiudadNombre(String ciudadNombre) {
        this.ciudadNombre = ciudadNombre;
    }

}
